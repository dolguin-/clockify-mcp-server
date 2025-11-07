import { TOOLS_CONFIG } from "../config/api";
import { usersService } from "../clockify-sdk/users";
import {
  ClockifyUser,
  McpResponse,
  McpToolConfig,
  McpToolConfigWithoutParameters,
  TFindUsersSchema,
} from "../types";
import { z } from "zod";

export const getCurrentUserTool: McpToolConfigWithoutParameters = {
  name: TOOLS_CONFIG.users.current.name,
  description: TOOLS_CONFIG.users.current.description,
  handler: async (): Promise<McpResponse> => {
    const response = await usersService.getCurrent();

    const user: ClockifyUser = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(user),
        },
      ],
    };
  },
};

export const findWorkspaceUsersTool: McpToolConfig = {
  name: TOOLS_CONFIG.users.list.name,
  description: TOOLS_CONFIG.users.list.description,
  parameters: {
    workspaceId: z
      .string()
      .describe("The ID of the workspace to get users from"),
    page: z
      .number()
      .optional()
      .default(1)
      .describe("Page number for pagination (default: 1)"),
    pageSize: z
      .number()
      .optional()
      .default(50)
      .describe("Number of users per page (default: 50, max: 5000)"),
  },
  handler: async ({ workspaceId, page, pageSize }: TFindUsersSchema): Promise<McpResponse> => {
    try {
      const response = await usersService.fetchByWorkspace(workspaceId, page, pageSize);
      const users = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));

      return {
        content: [
          {
            type: "text",
            text: `Found ${users.length} users in workspace (Page ${page}, ${pageSize} per page):\n${JSON.stringify(users, null, 2)}`,
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to fetch workspace users: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  },
};
