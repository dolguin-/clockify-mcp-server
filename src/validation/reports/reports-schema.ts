import { z } from "zod";

export const ReportsSchema = z.object({
  workspaceId: z.string().describe("The id of the workspace to get reports from"),
  dateRangeStart: z.coerce.date().describe("Start date for the report (required)"),
  dateRangeEnd: z.coerce.date().describe("End date for the report (required)"),
  detailedFilter: z.object({
    page: z.number().optional().default(1),
    pageSize: z.number().optional().default(50),
  }).describe("Detailed filter configuration"),

  // Optional filters
  description: z.string().optional().describe("Search term for filtering entries by description"),
  billable: z.boolean().optional().describe("Filter by billable entries"),
  archived: z.boolean().optional().describe("Include archived entries"),
  withoutDescription: z.boolean().optional().describe("Include only entries with empty description"),

  // Enum filters
  amountShown: z.enum(["EARNED", "COST", "PROFIT", "HIDE_AMOUNT", "EXPORT"]).optional().describe("Amount type to show"),
  approvalState: z.enum(["APPROVED", "UNAPPROVED", "ALL"]).optional().describe("Approval state filter"),
  invoicingState: z.enum(["INVOICED", "UNINVOICED", "ALL"]).optional().describe("Invoicing state filter"),
  sortOrder: z.enum(["ASCENDING", "DESCENDING"]).optional().describe("Sort order for results"),

  // Project and user filters
  projects: z.object({
    ids: z.array(z.string()).optional(),
    contains: z.enum(["ACTIVE", "ARCHIVED", "ALL"]).optional().default("ACTIVE"),
  }).optional().describe("Project filter"),

  users: z.object({
    ids: z.array(z.string()).optional(),
    contains: z.enum(["ACTIVE", "ARCHIVED", "ALL"]).optional().default("ACTIVE"),
  }).optional().describe("User filter"),

  // Time zone and format
  timeZone: z.string().optional().describe("Time zone for the report"),
  dateFormat: z.string().optional().default("YYYY-MM-DD").describe("Date format"),
  timeFormat: z.string().optional().default("THH:MM:SS.ssssss").describe("Time format"),
});
