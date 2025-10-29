import { after, describe, it } from "node:test";
import { createMcpClient, TEST_WORKSPACE_ID, TEST_PROJECT_ID } from "./setup";
import { McpResponse } from "../src/types";
import assert from "node:assert";

describe("Tasks MCP Tests", async () => {
  const client = await createMcpClient();

  after(async () => {
    await client.close();
  });

  it("Get tasks from a project", async () => {
    const response = (await client.callTool({
      name: "get-project-tasks",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        projectId: TEST_PROJECT_ID,
      },
    })) as McpResponse;

    assert(
      (response.content[0].text as string).startsWith("Found")
    );
    assert(
      (response.content[0].text as string).includes("tasks in project")
    );
  });
});
