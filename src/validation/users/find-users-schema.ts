import { z } from "zod";

export const FindUsersSchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace to get users from"),
  page: z.number().optional().default(1).describe("Page number for pagination (default: 1)"),
  pageSize: z.number().optional().default(50).describe("Number of users per page (default: 50, max: 5000)"),
});
