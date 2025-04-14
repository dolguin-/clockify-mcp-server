import { TOOLS_CONFIG } from "../config/api";
import { workspacesService } from "../clockify-sdk/workspaces";
import {
  ClockifyWorkspace,
  McpResponse,
  McpToolConfigWithoutParameters,
} from "../types";

export const findWorkspacesTool: McpToolConfigWithoutParameters = {
  name: TOOLS_CONFIG.workspaces.list.name,
  description: TOOLS_CONFIG.workspaces.list.description,
  handler: async (): Promise<McpResponse> => {
    const response = await workspacesService.fetchAll();

    const workspaces = response.data.map((workspace: ClockifyWorkspace) => ({
      name: workspace.name,
      id: workspace.id,
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(workspaces),
        },
      ],
    };
  },
};
