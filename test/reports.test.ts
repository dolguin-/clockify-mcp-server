import { describe, it, after } from "node:test";
import assert from "node:assert";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { spawn } from "node:child_process";
import { WORKSPACE_ID } from "./setup";

describe("Reports functionality", () => {
  let client: Client;
  let serverProcess: any;

  it("should generate time entries report", async () => {
    serverProcess = spawn("tsx", ["src/index.ts", "--local"], {
      stdio: ["pipe", "pipe", "pipe"],
      env: { ...process.env },
    });

    const transport = new StdioClientTransport({
      reader: serverProcess.stdout,
      writer: serverProcess.stdin,
    });

    client = new Client(
      {
        name: "test-client",
        version: "1.0.0",
      },
      {
        capabilities: {},
      }
    );

    await client.connect(transport);

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const endDate = new Date();

    const result = await client.request(
      {
        method: "tools/call",
        params: {
          name: "gettimeentriesreport",
          arguments: {
            workspaceId: WORKSPACE_ID,
            start: startDate.toISOString(),
            end: endDate.toISOString(),
          },
        },
      },
      {}
    );

    assert(result.content);
    assert(Array.isArray(result.content));
    assert(result.content.length > 0);
    assert(result.content[0].type === "text");
    assert(result.content[0].text.includes("Time Entries Report"));
  });

  after(async () => {
    if (client) {
      await client.close();
    }
    if (serverProcess) {
      serverProcess.kill();
    }
  });
});
