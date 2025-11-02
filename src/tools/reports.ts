import { TOOLS_CONFIG } from "../config/api";
import { reportsService } from "../clockify-sdk/reports";
import { McpResponse, McpToolConfig, TReportsSchema } from "../types";
import { ReportsSchema } from "../validation/reports/reports-schema";

export const getReportsTool: McpToolConfig = {
  name: TOOLS_CONFIG.reports.detailed.name,
  description: TOOLS_CONFIG.reports.detailed.description,
  parameters: ReportsSchema.shape,
  handler: async (params: TReportsSchema): Promise<McpResponse> => {
    try {
      const result = await reportsService.getDetailedReport(params);

      const entries = result.data.timeentries || [];
      const totalCount = result.data.totals?.[0]?.totalTime || 0;

      let reportText = `Found ${entries.length} time entries`;
      if (totalCount) {
        const hours = Math.floor(totalCount / 3600);
        const minutes = Math.floor((totalCount % 3600) / 60);
        reportText += ` (Total: ${hours}h ${minutes}m)`;
      }
      reportText += `:\n\n`;

      entries.forEach((entry: any, index: number) => {
        const start = new Date(entry.timeInterval.start).toLocaleString();
        const end = entry.timeInterval.end ? new Date(entry.timeInterval.end).toLocaleString() : 'Running';
        const duration = entry.timeInterval.duration || 'N/A';

        reportText += `${index + 1}. ${entry.description || 'No description'}\n`;
        reportText += `   Project: ${entry.projectName || 'No project'}\n`;
        reportText += `   User: ${entry.userName || 'Unknown'}\n`;
        reportText += `   User Email: ${entry.userEmail || 'N/A'}\n`;
        reportText += `   Time: ${start} - ${end}\n`;
        reportText += `   Duration: ${duration}\n`;
        reportText += `   Billable: ${entry.billable ? 'Yes' : 'No'}\n`;
        reportText += `   Tags: ${entry.tags?.map((tag: any) => tag.name).join(', ') || 'None'}\n`;
        reportText += `   Task: ${entry.taskName || 'No task'}\n`;
        reportText += `   Client: ${entry.clientName || 'No client'}\n`;
        reportText += `   Project Color: ${entry.projectColor || 'N/A'}\n`;
        reportText += `   Hourly Rate: ${entry.hourlyRate || 'N/A'}\n`;
        reportText += `   Amount: ${entry.amount || 'N/A'}\n`;
        reportText += `   Entry ID: ${entry.id || 'N/A'}\n\n`;
      });

      return {
        content: [
          {
            type: "text",
            text: reportText,
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to get reports: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  },
};
