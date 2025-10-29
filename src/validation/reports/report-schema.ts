import { z } from "zod";

export const reportSchema = z.object({
  workspaceId: z.string().describe("The id of the workspace to generate the report for"),
  start: z.coerce.date().describe("Start date for the report period"),
  end: z.coerce.date().describe("End date for the report period"),
  project: z.string().optional().describe("The id of the project to filter entries"),
  userId: z.string().optional().describe("The id of the user to filter entries"),
  description: z.string().optional().describe("Filter entries by description text"),
  billable: z.boolean().optional().describe("Filter entries by billable status"),
  page: z.number().optional().default(1).describe("Page number for pagination"),
  pageSize: z.number().optional().default(50).describe("Number of entries per page"),
});

export type TReportSchema = z.infer<typeof reportSchema>;
