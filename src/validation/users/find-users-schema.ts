import { z } from "zod";

export const FindUsersSchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace to get users from"),
});
