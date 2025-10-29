import { tasksService } from "../clockify-sdk/tasks";
import { TOOLS_CONFIG } from "../config/api";
import { z } from "zod";
import { McpResponse, McpToolConfig, TFindTasksSchema } from "../types";

export const findTasksTool: McpToolConfig = {
  name: TOOLS_CONFIG.tasks.list.name,
  description: TOOLS_CONFIG.tasks.list.description,
  parameters: {
    workspaceId: z
      .string()
      .describe("The ID of the workspace"),
    projectId: z
      .string()
      .describe("The ID of the project to get tasks from"),
  },
  handler: async ({
    workspaceId,
    projectId,
  }: TFindTasksSchema): Promise<McpResponse> => {
    try {
      const response = await tasksService.fetchByProject(workspaceId, projectId);
      const tasks = response.data.map((task: any) => ({
        id: task.id,
        name: task.name,
        status: task.status,
      }));

      return {
        content: [
          {
            type: "text",
            text: `Found ${tasks.length} tasks in project:\n${JSON.stringify(tasks, null, 2)}`,
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to fetch tasks: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  },
};