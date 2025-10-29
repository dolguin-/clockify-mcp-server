# Technology Stack

## Programming Languages
- **TypeScript 5.8.3** - Primary development language
- **Node.js >=20.0.0** - Runtime environment
- **ES Modules** - Module system (type: "module" in package.json)

## Core Dependencies
- **@modelcontextprotocol/sdk ^1.12.1** - MCP server framework
- **axios ^1.8.4** - HTTP client for Clockify API
- **zod ^3.24.2** - Runtime type validation and schema definition
- **dotenv ^16.5.0** - Environment variable management

## Development Dependencies
- **@smithery/cli ^1.2.4** - Build and development tooling
- **typescript ^5.8.3** - TypeScript compiler
- **tsx ^4.20.3** - TypeScript execution engine
- **ts-node-dev ^2.0.0** - Development server with hot reload
- **@types/node ^20.19.7** - Node.js type definitions

## Build System
- **Target**: ESNext (modern JavaScript features)
- **Module**: CommonJS output for compatibility
- **Output Directory**: `./dist`
- **Smithery CLI** for build and development workflows

## Development Commands
```bash
npm run dev    # Start development server with hot reload
npm run build  # Build production bundle
```

## Configuration Files
- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - Project metadata and dependencies
- **`.nvmrc`** - Node.js version specification
- **`.env.example`** - Environment variable template
- **`smithery.yaml`** - Smithery deployment configuration

## Environment Variables
- **`CLOCKIFY_API_URL`** - Clockify API endpoint (https://api.clockify.me/api/v1)
- **`CLOCKIFY_API_TOKEN`** - User's Clockify API authentication token

## Deployment
- Published to Smithery registry as `@https-eduardo/clockify-mcp-server`
- Supports both automatic and manual installation for Claude Desktop
- Requires global `tsx` installation for manual setup