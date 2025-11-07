# Clockify MCP Server

[![smithery badge](https://smithery.ai/badge/@https-eduardo/clockify-mcp-server)](https://smithery.ai/server/@https-eduardo/clockify-mcp-server)
[![Pre-commit](https://github.com/dolguin-/clockify-mcp-server/actions/workflows/pre-commit.yml/badge.svg)](https://github.com/dolguin-/clockify-mcp-server/actions/workflows/pre-commit.yml)
[![Unit Tests](https://github.com/dolguin-/clockify-mcp-server/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/dolguin-/clockify-mcp-server/actions/workflows/unit-tests.yml)

This MCP Server integrates with AI Tools to manage your time entries in Clockify, so you can register your time entries just sending an prompt to LLM.

## Features

- **Time Entry Management**: Create, edit, delete, and list time entries
- **Project Integration**: Associate time entries with Clockify projects and tasks
- **Workspace Support**: Manage entries across different workspaces
- **User Management**: Get current user information and workspace users with pagination
- **Detailed Reports**: Generate comprehensive time tracking reports with advanced filtering
- **Scheduling & Capacity**: Track project assignments, milestones, and user capacity
- **Resource Planning**: View workspace-wide assignments and workload distribution
- **Billable Time Tracking**: Support for billable/non-billable time categorization
- **AI-Powered Interface**: Natural language interaction through LLM prompts

## 📚 Documentation

- **[Quick Start Guide](./docs/QUICKSTART.md)** - Get started in minutes
- **[Examples & Use Cases](./docs/EXAMPLES.md)** - Comprehensive prompt examples
- **[Time Entries Guide](./docs/examples/TIME_ENTRIES.md)** - Managing time entries
- **[Reports Guide](./docs/examples/REPORTS.md)** - Generating reports and analytics
- **[Scheduling Guide](./docs/examples/SCHEDULING.md)** - Capacity planning and assignments
- **[Workspace Management](./docs/examples/WORKSPACE_MANAGEMENT.md)** - Managing workspaces and projects

## Next Implementations

- Implement tags for entries
- Add time entry templates
- Support for custom fields

## Using in Claude Desktop

### Installing via Smithery

To install clockify-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@https-eduardo/clockify-mcp-server):

```bash
npx -y @smithery/cli install @https-eduardo/clockify-mcp-server --client claude
```

### Installing Manually

First, install tsx globally

`npm i -g tsx`

Then insert the MCP server in `claude_desktop_config`

```json
{
  "mcpServers": {
    "clockify-time-entries": {
      "command": "tsx",
      "args": ["ABSOLUTE_PATH/src/index.ts", "--local"],
      "env": {
        "CLOCKIFY_API_URL": "https://api.clockify.me/api/v1",
        "CLOCKIFY_API_TOKEN": "YOUR_CLOCKIFY_API_TOKEN_HERE"
      }
    }
  }
}
```

## Using in Amazon Q

### Installing via Smithery

To install clockify-mcp-server for Amazon Q automatically via [Smithery](https://smithery.ai/server/@https-eduardo/clockify-mcp-server):

```bash
npx -y @smithery/cli install @https-eduardo/clockify-mcp-server --client amazonq
```

### Installing Manually

First, install tsx globally

`npm i -g tsx`

Then add the MCP server to your Amazon Q configuration:

```json
{
  "mcpServers": {
    "clockify-time-entries": {
      "command": "tsx",
      "args": ["ABSOLUTE_PATH/src/index.ts", "--local"],
      "env": {
        "CLOCKIFY_API_URL": "https://api.clockify.me/api/v1",
        "CLOCKIFY_API_TOKEN": "YOUR_CLOCKIFY_API_TOKEN_HERE"
      }
    }
  }
}
```
