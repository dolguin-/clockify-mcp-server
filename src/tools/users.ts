import { TOOLS_CONFIG } from "../config/api";
import { usersService } from "../clockify-sdk/users";
import {
  ClockifyUser,
  McpResponse,
  McpToolConfigWithoutParameters,
} from "../types";

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
