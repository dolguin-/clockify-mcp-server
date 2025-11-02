import { describe, it, after } from "node:test";
import assert from "node:assert";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { getReportsTool } from "../src/tools/reports.js";
import { TEST_WORKSPACE_ID } from "./setup.js";

describe("Reports functionality", () => {
  const server = new Server(
    {
      name: "clockify-test-server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "getdetailedreports") {
      return await getReportsTool.handler(request.params.arguments || {});
    }
    throw new Error(`Unknown tool: ${request.params.name}`);
  });

  const transport = new StdioServerTransport();
  server.connect(transport);

  after(() => {
    server.close();
  });

  it("should get detailed reports with required parameters", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 }
    });

    assert(result.content);
    assert(Array.isArray(result.content));
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle billable filter", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 },
      billable: true
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle description filter", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 },
      description: "test"
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle projects filter", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 },
      projects: { contains: "ACTIVE" }
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle users filter", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 },
      users: { contains: "ACTIVE" }
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle amount shown filter", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 10 },
      amountShown: "EARNED"
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should handle pagination", async () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 30);

    const result = await getReportsTool.handler({
      workspaceId: TEST_WORKSPACE_ID,
      dateRangeStart: startDate.toISOString(),
      dateRangeEnd: endDate.toISOString(),
      detailedFilter: { page: 1, pageSize: 5 }
    });

    assert(result.content);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("time entries"));
  });

  it("should fail with missing required parameters", async () => {
    try {
      await getReportsTool.handler({
        workspaceId: TEST_WORKSPACE_ID
      });
      assert.fail("Should have thrown an error");
    } catch (error) {
      assert(error instanceof Error);
      assert(error.message.includes("dateRangeStart") || error.message.includes("required"));
    }
  });
});
