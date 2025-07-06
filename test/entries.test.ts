import { after, describe, it } from "node:test";
import { createMcpClient, TEST_WORKSPACE_ID, TEST_PROJECT_ID } from "./setup";
import { McpResponse } from "../src/types";
import assert from "node:assert";

let createdEntryId: string;

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
        description: "MCP Test Entry",
        start: dateOneHourBefore,
        end: currentDate,
      },
    })) as McpResponse;

    assert(
      (response.content[0].text as string).startsWith(
        "Time entry created successfully"
      )
    );
  });

  it("Create a time entry with project", async () => {
    const dateTwoHoursBefore = new Date();
    dateTwoHoursBefore.setHours(dateTwoHoursBefore.getHours() - 2);

    const dateOneHourBefore = new Date();
    dateOneHourBefore.setHours(dateOneHourBefore.getHours() - 1);

    const response = (await client.callTool({
      name: "create-time-entry",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        billable: false,
        description: "MCP Test Entry with Project",
        start: dateTwoHoursBefore,
        end: dateOneHourBefore,
        projectId: TEST_PROJECT_ID,
      },
    })) as McpResponse;

    assert(
      (response.content[0].text as string).startsWith(
        "Time entry created successfully"
      )
    );

    const match = (response.content[0].text as string).match(/ID: ([^\s]+)/);
    if (match) {
      createdEntryId = match[1];
    }
  });

  it("Edit a time entry", async () => {
    if (!createdEntryId) {
      throw new Error("No entry ID available for editing");
    }

    const response = (await client.callTool({
      name: "edit-time-entry",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        timeEntryId: createdEntryId,
        description: "MCP Test Entry Edited",
        billable: false,
      },
    })) as McpResponse;
    assert(
      (response.content[0].text as string).startsWith(
        "Time entry updated successfully"
      )
    );
  });

  it("Delete a time entry", async () => {
    if (!createdEntryId) {
      throw new Error("No entry ID available for deletion");
    }

    const response = (await client.callTool({
      name: "delete-time-entry",
      arguments: {
        workspaceId: TEST_WORKSPACE_ID,
        timeEntryId: createdEntryId,
      },
    })) as McpResponse;

    assert(
      (response.content[0].text as string).startsWith("Time entry with ID")
    );
    assert(
      (response.content[0].text as string).includes("was deleted successfully")
    );
  });
});
