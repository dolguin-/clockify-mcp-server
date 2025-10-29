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

    const user: ClockifyUser = JSON.parse(response.content[0].text as string);
    assert(user.id === TEST_USER_ID);
  });

  it("Get workspace users", async () => {
    const response = (await client.callTool({
      name: "get-workspace-users",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
      },
    })) as McpResponse;

    assert(response.content[0].text);
    assert(response.content[0].text.includes("Users in workspace"));
    
    const users = JSON.parse(response.content[0].text.split('\n')[1]);
    assert(Array.isArray(users));
    assert(users.length > 0);
    assert(users.some((user: ClockifyUser) => user.id === TEST_USER_ID));
  });
});
