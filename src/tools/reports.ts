import { McpToolConfig, TReportSchema } from "../types";
import { reportSchema } from "../validation/reports/report-schema";
import { reportsService } from "../clockify-sdk/reports";

export const getTimeEntriesReport: McpToolConfig = {
  name: "gettimeentriesreport",
  description: "Generate a detailed time entries report for a workspace with optional filters",
  parameters: reportSchema,
  handler: async (params: TReportSchema) => {
    try {
      const response = await reportsService.getDetailedReport(params);
      const report = response.data;

      let reportText = `Time Entries Report\n`;
      reportText += `Period: ${params.start.toDateString()} to ${params.end.toDateString()}\n`;
      reportText += `Total entries: ${report.totals?.[0]?.entriesCount || 0}\n`;
      reportText += `Total time: ${report.totals?.[0]?.timeInterval || "0:00:00"}\n\n`;

      if (report.timeentries && report.timeentries.length > 0) {
        reportText += "Entries:\n";
        report.timeentries.forEach((entry: any, index: number) => {
          reportText += `${index + 1}. ${entry.description || "No description"}\n`;
          reportText += `   Project: ${entry.projectName || "No project"}\n`;
          reportText += `   Duration: ${entry.timeInterval}\n`;
          reportText += `   Date: ${new Date(entry.start).toDateString()}\n`;
          reportText += `   Billable: ${entry.billable ? "Yes" : "No"}\n\n`;
        });
      }

      return {
        content: [
          {
            type: "text",
            text: reportText,
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to generate time entries report: ${error.message}`,
          },
        ],
      };
    }
  },
};
