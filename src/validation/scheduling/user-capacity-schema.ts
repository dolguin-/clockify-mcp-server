import { z } from "zod";

export const UserCapacitySchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace"),
  userId: z.string().describe("The ID of the user"),
  start: z.coerce.date().describe("Start date for the capacity query"),
  end: z.coerce.date().describe("End date for the capacity query"),
  page: z.number().optional().default(1).describe("Page number (default: 1)"),
  pageSize: z.number().optional().default(100).describe("Number of items per page (default: 100)"),
});
