import { z } from "zod";

export const AllAssignmentsSchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace"),
  start: z.coerce.date().describe("Start date for the assignments query"),
  end: z.coerce.date().describe("End date for the assignments query"),
  sortColumn: z.string().optional().describe("Column to sort by"),
  sortOrder: z.enum(["ASCENDING", "DESCENDING"]).optional().describe("Sort order"),
  page: z.number().optional().default(1).describe("Page number for pagination"),
  pageSize: z.number().optional().default(200).describe("Number of items per page (default: 200)"),
});
