import { AxiosInstance } from "axios";
import { TAssignmentsSchema } from "../types";
import { api } from "../config/api";
import { logger } from "../config/logger";

function SchedulingService(api: AxiosInstance) {
  async function getProjectAssignments(params: TAssignmentsSchema) {
    const queryParams = new URLSearchParams({
      start: params.start.toISOString(),
      end: params.end.toISOString(),
    });
    const url = `/workspaces/${params.workspaceId}/scheduling/assignments/projects/totals/${params.projectId}?${queryParams}`;
    logger.debug('[SDK] Request URL:', url);
    const response = await api.get(url);
    logger.debug('[SDK] Raw API Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  }

  return { getProjectAssignments };
}

export const schedulingService = SchedulingService(api);
