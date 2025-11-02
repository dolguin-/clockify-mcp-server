import axios, { AxiosInstance } from "axios";
import { TReportsSchema } from "../types";

const reportsApi = axios.create({
  baseURL: 'https://reports.api.clockify.me/v1',
  headers: {
    "X-Api-Key": `${process.env.CLOCKIFY_API_TOKEN}`,
  },
});

function ReportsService(api: AxiosInstance) {
  async function getDetailedReport(params: TReportsSchema) {
    const body = {
      dateRangeStart: params.dateRangeStart.toISOString(),
      dateRangeEnd: params.dateRangeEnd.toISOString(),
      detailedFilter: params.detailedFilter,
      ...(params.description && { description: params.description }),
      ...(params.billable !== undefined && { billable: params.billable }),
      ...(params.archived !== undefined && { archived: params.archived }),
      ...(params.withoutDescription !== undefined && { withoutDescription: params.withoutDescription }),
      ...(params.amountShown && { amountShown: params.amountShown }),
      ...(params.approvalState && { approvalState: params.approvalState }),
      ...(params.invoicingState && { invoicingState: params.invoicingState }),
      ...(params.sortOrder && { sortOrder: params.sortOrder }),
      ...(params.projects && { projects: params.projects }),
      ...(params.users && { users: params.users }),
      ...(params.timeZone && { timeZone: params.timeZone }),
      ...(params.dateFormat && { dateFormat: params.dateFormat }),
      ...(params.timeFormat && { timeFormat: params.timeFormat }),
    };

    return api.post(`/workspaces/${params.workspaceId}/reports/detailed`, body);
  }

  return { getDetailedReport };
}

export const reportsService = ReportsService(reportsApi);
