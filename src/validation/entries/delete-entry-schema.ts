import { z } from "zod";

export const DeleteEntrySchema = z.object({
  workspaceId: z.string(),
  timeEntryId: z.string(),
});
