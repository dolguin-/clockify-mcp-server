import { after, describe, it } from "node:test";
import { createMcpClient, TEST_WORKSPACE_ID } from "./setup";
import { McpResponse } from "../src/types";
import assert from "node:assert";

describe("Entries MCP Tests", async () => {
  const client = await createMcpClient();

  after(async () => {
    await client.close();
  });

  it("Create a billable time entry without project", async () => {
    const dateOneHourBefore = new Date();
    dateOneHourBefore.setHours(dateOneHourBefore.getHours() - 1);

    const currentDate = new Date();

    const response = (await client.callTool({
      name: "create-time-entry",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        billable: true,
        description: "Teste MCP Entry",
        start: dateOneHourBefore,
        end: currentDate,
      },
    })) as McpResponse;

    assert(
      (response.content[0].text as string).startsWith(
        "Registro inserido com sucesso"
      )
    );
  });
});
