import { z } from "zod";

export const FindTasksSchema = z.object({
  workspaceId: z.string().describe("The ID of the workspace"),
  projectId: z.string().describe("The ID of the project to get tasks from"),
});