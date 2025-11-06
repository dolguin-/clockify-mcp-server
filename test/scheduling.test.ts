import { after, describe, it } from "node:test";
import { createMcpClient, TEST_WORKSPACE_ID, TEST_PROJECT_ID } from "./setup";
import { McpResponse } from "../src/types";
import assert from "node:assert";

describe("Scheduling MCP Tests", async () => {
  const client = await createMcpClient();

  after(async () => {
    await client.close();
  });

  it("Get project assignments for a date range", async () => {
    const startDate = new Date("2025-11-01");
    const endDate = new Date("2025-11-30");

    const response = (await client.callTool({
      name: "get-project-assignments",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        projectId: TEST_PROJECT_ID,
        start: startDate,
        end: endDate,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    const text = response.content[0].text as string;

    // Verify response contains project information
    assert(text.includes("Project:"));
    assert(text.includes("Client:"));
    assert(text.includes("Status:"));
    assert(text.includes("Billable:"));
    assert(text.includes("Total Hours:"));
    assert(text.includes("Days with assignments:"));
  });

  it("Verify response structure and content", async () => {
    const startDate = new Date("2025-10-01");
    const endDate = new Date("2025-10-31");

    const response = (await client.callTool({
      name: "get-project-assignments",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        projectId: TEST_PROJECT_ID,
        start: startDate,
        end: endDate,
      },
    })) as McpResponse;

    // Verify response has content
    assert(response.content);
    assert(response.content.length > 0);
    assert(response.content[0].type === "text");

    const text = response.content[0].text as string;
    assert(text);
    assert(text.length > 0);

    // Verify it contains project information
    assert(text.includes("Project:") || text.includes("No data"));
  });

  it("Get all assignments for a date range", async () => {
    const startDate = new Date("2025-11-01");
    const endDate = new Date("2025-11-30");

    const response = (await client.callTool({
      name: "get-all-assignments",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        start: startDate,
        end: endDate,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    const text = response.content[0].text as string;

    // Verify response contains assignment information or no assignments message
    assert(
      text.includes("Found") ||
      text.includes("No assignments found")
    );

    // If assignments found, verify structure
    if (text.includes("Found")) {
      assert(text.includes("User ID:") || text.includes("assignment(s)"));
      assert(text.includes("Tip:"));
    }
  });

  it("Get all assignments with pagination", async () => {
    const startDate = new Date("2025-11-01");
    const endDate = new Date("2025-11-30");

    const response = (await client.callTool({
      name: "get-all-assignments",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        start: startDate,
        end: endDate,
        page: 1,
        pageSize: 50,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    const text = response.content[0].text as string;
    assert(text.length > 0);

    // Verify pagination info is included
    if (text.includes("Found") && !text.includes("No assignments")) {
      assert(text.includes("Page 1"));
      assert(text.includes("50 per page"));
    }
  });
});
