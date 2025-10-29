import { AxiosInstance } from "axios";
import { api } from "../config/api";
import { TReportSchema } from "../types";

function ReportsService(api: AxiosInstance) {
  async function getDetailedReport(params: TReportSchema) {
    const body = {
      dateRangeStart: params.start,
      dateRangeEnd: params.end,
      detailedFilter: {
        page: params.page || 1,
        pageSize: params.pageSize || 50,
        ...(params.project && { projects: [params.project] }),
        ...(params.userId && { users: [params.userId] }),
        ...(params.description && { description: params.description }),
        ...(params.billable !== undefined && { billable: params.billable }),
      },
    };

    return api.post(`workspaces/${params.workspaceId}/reports/detailed`, body);
  }

  return { getDetailedReport };
}

export const reportsService = ReportsService(api);
