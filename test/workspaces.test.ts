import { after, describe, it } from "node:test";
import assert from "node:assert";
import { createMcpClient, TEST_WORKSPACE_ID } from "./setup";
import { ClockifyWorkspace, McpResponse } from "../src/types";

describe("Workspaces MCP Tests", async () => {
  const client = await createMcpClient();

  after(async () => {
    await client.close();
  });

  it("should list all user workspaces", async () => {
    const result = (await client.callTool({
      name: "get-workspaces",
    })) as McpResponse;

    const workspaces: ClockifyWorkspace[] = JSON.parse(
      result.content[0].text as string
    );

    assert(workspaces.length > 0);
    assert(
      workspaces.find(
        (workspace: ClockifyWorkspace) => workspace.id === TEST_WORKSPACE_ID
      )
    );
  });
});
