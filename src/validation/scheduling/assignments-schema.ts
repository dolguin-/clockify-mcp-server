import { z } from "zod";

export const AssignmentsSchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace"),
  projectId: z.string().describe("The ID of the project to get assignments from"),
  start: z.coerce.date().describe("Start date for the assignments query"),
  end: z.coerce.date().describe("End date for the assignments query"),
});
