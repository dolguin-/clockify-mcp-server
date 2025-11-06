import dotenv from "dotenv";
dotenv.config();
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { api, SERVER_CONFIG } from "./config/api";
import { logger } from "./config/logger";
import {
  createEntryTool,
  deleteEntryTool,
  editEntryTool,
  listEntriesTool,
} from "./tools/entries";
import { findProjectTool } from "./tools/projects";
import { findTasksTool } from "./tools/tasks";
import { getCurrentUserTool, findWorkspaceUsersTool } from "./tools/users";
import { findWorkspacesTool } from "./tools/workspaces";
import { getReportsTool } from "./tools/reports";
import { getProjectAssignmentsTool } from "./tools/scheduling";
import { z } from "zod";
import { argv } from "process";

export const configSchema = z.object({
  clockifyApiToken: z.string().describe("Clockify API Token"),
});

const server = new McpServer(SERVER_CONFIG);

// Wrapper para agregar logging a los handlers
function wrapHandler(toolName: string, handler: any) {
  return async (params: any) => {
    logger.debug(`[MCP Server] Tool called: ${toolName}`);
    logger.debug(`[MCP Server] Input params:`, JSON.stringify(params, null, 2));
    try {
      const result = await handler(params);
      logger.debug(`[MCP Server] Tool response:`, JSON.stringify(result, null, 2));
      return result;
    } catch (error: any) {
      logger.error(`[MCP Server] Tool error in ${toolName}:`, error.message);
      logger.error(`[MCP Server] Error stack:`, error.stack);
      // Re-lanzar el error para que el MCP lo maneje correctamente
      throw error;
    }
  };
}

export default function createStatelessServer({
  config,
}: {
  config: z.infer<typeof configSchema>;
}) {
  api.defaults.headers.Authorization = `Bearer ${config.clockifyApiToken}`;
  server.tool(
    createEntryTool.name,
    createEntryTool.description,
    createEntryTool.parameters,
    wrapHandler(createEntryTool.name, createEntryTool.handler)
  );

  server.tool(
    findProjectTool.name,
    findProjectTool.description,
    findProjectTool.parameters,
    wrapHandler(findProjectTool.name, findProjectTool.handler)
  );

  server.tool(
    listEntriesTool.name,
    listEntriesTool.description,
    listEntriesTool.parameters,
    wrapHandler(listEntriesTool.name, listEntriesTool.handler)
  );

  server.tool(
    getCurrentUserTool.name,
    getCurrentUserTool.description,
    wrapHandler(getCurrentUserTool.name, getCurrentUserTool.handler)
  );

  server.tool(
    findWorkspacesTool.name,
    findWorkspacesTool.description,
    wrapHandler(findWorkspacesTool.name, findWorkspacesTool.handler)
  );

  server.tool(
    deleteEntryTool.name,
    deleteEntryTool.description,
    deleteEntryTool.parameters,
    wrapHandler(deleteEntryTool.name, deleteEntryTool.handler)
  );

  server.tool(
    editEntryTool.name,
    editEntryTool.description,
    editEntryTool.parameters,
    wrapHandler(editEntryTool.name, editEntryTool.handler)
  );

  server.tool(
    findTasksTool.name,
    findTasksTool.description,
    findTasksTool.parameters,
    wrapHandler(findTasksTool.name, findTasksTool.handler)
  );

  server.tool(
    findWorkspaceUsersTool.name,
    findWorkspaceUsersTool.description,
    findWorkspaceUsersTool.parameters,
    wrapHandler(findWorkspaceUsersTool.name, findWorkspaceUsersTool.handler)
  );

  server.tool(
    getReportsTool.name,
    getReportsTool.description,
    getReportsTool.parameters,
    wrapHandler(getReportsTool.name, getReportsTool.handler)
  );

  server.tool(
    getProjectAssignmentsTool.name,
    getProjectAssignmentsTool.description,
    getProjectAssignmentsTool.parameters,
    wrapHandler(getProjectAssignmentsTool.name, getProjectAssignmentsTool.handler)
  );

  return server.server;
}

// Manejo de errores no capturados
process.on('uncaughtException', (error) => {
  logger.error('[MCP Server] Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('[MCP Server] Unhandled Rejection at:', promise, 'reason:', reason);
});

(() => {
  if (argv.find((flag) => flag === "--local")) {
    try {
      logger.info('[MCP Server] Starting server...');
      createStatelessServer({
        config: {
          clockifyApiToken: process.env.CLOCKIFY_API_TOKEN as string,
        },
      });
      const transport = new StdioServerTransport();
      server.connect(transport);
      logger.info('[MCP Server] Server started successfully');
    } catch (error: any) {
      logger.error('[MCP Server] Failed to start server:', error.message);
      throw error;
    }
  }
})();
