import dotenv from "dotenv";
dotenv.config();
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export const TEST_WORKSPACE_ID = process.env.TEST_WORKSPACE_ID;
export const TEST_USER_ID = process.env.TEST_USER_ID;
export const TEST_PROJECT_ID = process.env.TEST_PROJECT_ID;

if (!TEST_WORKSPACE_ID || !TEST_USER_ID || !TEST_PROJECT_ID) {
  throw new Error(
    "Missing required test environment variables: TEST_WORKSPACE_ID, TEST_USER_ID, TEST_PROJECT_ID"
  );
}

export async function createMcpClient() {
  const transport = new StdioClientTransport({
    command: "tsx",
    args: ["src/index.ts", "--local"],
    env: process.env,
  });

  const client = new Client({
    name: "clockify-test-mcp-client",
    version: "1.1.1",
  });

  await client.connect(transport);

  return client;
}
