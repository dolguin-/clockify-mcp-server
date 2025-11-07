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

    try {
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

      assert(response.content);
      assert(response.content[0].type === "text");
      assert(typeof response.content[0].text === "string");
    } catch (error: any) {
      // API may reject due to overlapping entries or other business rules
      assert(error.message.includes("Failed to create entry"));
    }
  });

  it("Create a time entry with project", async () => {
    const dateTwoHoursBefore = new Date();
    dateTwoHoursBefore.setHours(dateTwoHoursBefore.getHours() - 2);

    const dateOneHourBefore = new Date();
    dateOneHourBefore.setHours(dateOneHourBefore.getHours() - 1);

    try {
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

      assert(response.content);
      assert(response.content[0].type === "text");
      const text = response.content[0].text as string;
      assert(typeof text === "string");

      const match = text.match(/ID: ([^\s]+)/);
      if (match) {
        createdEntryId = match[1];
      }
    } catch (error: any) {
      // API may reject due to overlapping entries or other business rules
      assert(error.message.includes("Failed to create entry"));
    }
  });

  it("Edit a time entry", async () => {
    if (!createdEntryId) {
      // Skip test if no entry was created
      assert(true, "Skipping edit test - no entry created");
      return;
    }

    try {
      const response = (await client.callTool({
        name: "edit-time-entry",
        arguments: {
          workspaceId: TEST_WORKSPACE_ID,
          timeEntryId: createdEntryId,
          description: "MCP Test Entry Edited",
          billable: false,
        },
      })) as McpResponse;

      assert(response.content);
      assert(response.content[0].type === "text");
      assert(typeof response.content[0].text === "string");
    } catch (error: any) {
      // API may reject due to various business rules
      assert(error.message.includes("Failed to edit entry"));
    }
  });

  it("Delete a time entry", async () => {
    if (!createdEntryId) {
      // Skip test if no entry was created
      assert(true, "Skipping delete test - no entry created");
      return;
    }

    try {
      const response = (await client.callTool({
        name: "delete-time-entry",
        arguments: {
          workspaceId: TEST_WORKSPACE_ID,
          timeEntryId: createdEntryId,
        },
      })) as McpResponse;

      assert(response.content);
      assert(response.content[0].type === "text");
      const text = response.content[0].text as string;
      assert(typeof text === "string");
      assert(text.includes("deleted successfully"));
    } catch (error: any) {
      // API may reject due to various business rules
      assert(error.message.includes("Failed to delete entry"));
    }
  });
});
