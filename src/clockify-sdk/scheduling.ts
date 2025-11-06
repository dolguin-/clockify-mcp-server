import { AxiosInstance } from "axios";
import { TAssignmentsSchema, TAllAssignmentsSchema } from "../types";
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

  async function getAllAssignments(params: TAllAssignmentsSchema) {
    const queryParams = new URLSearchParams({
      start: params.start.toISOString(),
      end: params.end.toISOString(),
      page: params.page?.toString() || "1",
      "page-size": params.pageSize?.toString() || "200",
    });

    if (params.sortColumn) {
      queryParams.append("sort-column", params.sortColumn);
    }
    if (params.sortOrder) {
      queryParams.append("sort-order", params.sortOrder);
    }

    const url = `/workspaces/${params.workspaceId}/scheduling/assignments/all?${queryParams}`;
    logger.debug('[SDK] Request URL:', url);
    const response = await api.get(url);
    logger.debug('[SDK] Raw API Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  }

  return { getProjectAssignments, getAllAssignments };
}

export const schedulingService = SchedulingService(api);
