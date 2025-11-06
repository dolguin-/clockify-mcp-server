import { TOOLS_CONFIG } from "../config/api";
import { schedulingService } from "../clockify-sdk/scheduling";
import { McpToolConfig, TAssignmentsSchema, TAllAssignmentsSchema, McpResponse } from "../types";
import { AssignmentsSchema } from "../validation/scheduling/assignments-schema";
import { AllAssignmentsSchema } from "../validation/scheduling/all-assignments-schema";
import { logger } from "../config/logger";

export const getProjectAssignmentsTool: McpToolConfig = {
  name: TOOLS_CONFIG.scheduling.assignments.name,
  description: TOOLS_CONFIG.scheduling.assignments.description,
  parameters: AssignmentsSchema.shape,
  handler: async (params: TAssignmentsSchema): Promise<McpResponse> => {
    try {
      logger.debug('[Tool] Received params:', JSON.stringify(params, null, 2));
      const data = await schedulingService.getProjectAssignments(params);
      logger.debug('[Tool] Processed data:', JSON.stringify(data, null, 2));

      if (!data) {
        return {
          content: [
            {
              type: "text",
              text: "No data found for this project.",
            },
          ],
        };
      }

      const assignments = data.assignments || [];
      const daysWithAssignments = assignments.filter((a: any) => a.hasAssignment).length;

      let result = `Project: ${data.projectName || 'Unknown'}\n`;
      result += `Client: ${data.clientName || 'N/A'}\n`;
      result += `Status: ${data.projectArchived ? 'Archived' : 'Active'}\n`;
      result += `Billable: ${data.projectBillable ? 'Yes' : 'No'}\n`;
      result += `Total Hours: ${data.totalHours || 0}h\n`;
      result += `Days with assignments: ${daysWithAssignments}/${assignments.length}\n`;

      if (data.milestones && data.milestones.length > 0) {
        result += `\nMilestones:\n`;
        data.milestones.forEach((milestone: any, index: number) => {
          result += `${index + 1}. ${milestone.name} - ${new Date(milestone.date).toLocaleDateString()}\n`;
        });
      }

      const response = {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      };
      logger.debug('[Tool] MCP Response:', JSON.stringify(response, null, 2));
      return response;
    } catch (error: any) {
      logger.error('[Tool] Error:', error.message);
      throw new Error(`Failed to get project assignments: ${error.message}`);
    }
  },
};

export const getAllAssignmentsTool: McpToolConfig = {
  name: TOOLS_CONFIG.scheduling.allAssignments.name,
  description: TOOLS_CONFIG.scheduling.allAssignments.description,
  parameters: AllAssignmentsSchema.shape,
  handler: async (params: TAllAssignmentsSchema): Promise<McpResponse> => {
    try {
      logger.debug('[Tool] Received params:', JSON.stringify(params, null, 2));
      const data = await schedulingService.getAllAssignments(params);
      logger.debug('[Tool] Processed data:', JSON.stringify(data, null, 2));

      if (!data || !Array.isArray(data) || data.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: "No assignments found for the specified date range.",
            },
          ],
        };
      }

      const assignmentsList = data
        .map((assignment: any, index: number) => {
          const userId = assignment.userId || 'Unknown';
          const projectId = assignment.projectId || 'No project';
          const status = assignment.status || 'Unknown';
          const period = assignment.period ? `${assignment.period.start || ''} to ${assignment.period.end || ''}` : 'N/A';
          const estimate = assignment.estimate ? `${assignment.estimate}h` : 'N/A';

          return `${index + 1}. User ID: ${userId}
   Project ID: ${projectId}
   Status: ${status}
   Period: ${period}
   Estimate: ${estimate}
   Assignment ID: ${assignment.id || 'N/A'}`;
        })
        .join('\n\n');

      let summary = `Found ${data.length} assignment(s)`;
      if (params.page && params.pageSize) {
        summary += ` (Page ${params.page}, ${params.pageSize} per page)`;
      }
      summary += `:\n\n${assignmentsList}`;

      // Add note about getting more details
      summary += `\n\n💡 Tip: Use get-workspace-users to get user names and get-projects to get project names.`;

      const response = {
        content: [
          {
            type: "text",
            text: summary,
          },
        ],
      };
      logger.debug('[Tool] MCP Response:', JSON.stringify(response, null, 2));
      return response;
    } catch (error: any) {
      logger.error('[Tool] Error:', error.message);
      throw new Error(`Failed to get all assignments: ${error.message}`);
    }
  },
};
