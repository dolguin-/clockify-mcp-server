import { after, describe, it } from "node:test";
import { createMcpClient, TEST_WORKSPACE_ID, TEST_USER_ID } from "./setup";
import assert from "node:assert";
import { ClockifyUser, McpResponse } from "../src/types";

describe("Users MCP Tests", async () => {
  const client = await createMcpClient();

  after(async () => {
    await client.close();
  });

  it("Retrieve current user info", async () => {
    const response = (await client.callTool({
      name: "get-current-user",
    })) as McpResponse;

    assert(response.content);
    assert(response.content[0].type === "text");
    const user: ClockifyUser = JSON.parse(response.content[0].text as string);
    assert(user.id);
    assert(user.name);
    assert(user.email);
  });

  it("Get workspace users", async () => {
    const response = (await client.callTool({
      name: "get-workspace-users",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    const text = response.content[0].text as string;
    assert(text.includes("Found"));
    assert(text.includes("users in workspace"));
    assert(text.includes("Page 1"));
    assert(text.includes("50 per page"));

    const jsonStart = text.indexOf('[');
    const users = JSON.parse(text.substring(jsonStart));
    assert(Array.isArray(users));
    assert(users.length > 0);
    assert(users.length <= 50);
  });

  it("Get workspace users with pagination", async () => {
    const response = (await client.callTool({
      name: "get-workspace-users",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        page: 1,
        pageSize: 10,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    const text = response.content[0].text as string;
    assert(text.includes("Found"));
    assert(text.includes("Page 1"));
    assert(text.includes("10 per page"));

    const jsonStart = text.indexOf('[');
    const users = JSON.parse(text.substring(jsonStart));
    assert(Array.isArray(users));
    assert(users.length <= 10);
  });
});
