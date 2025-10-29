# Project Structure

## Directory Organization

### `/src/` - Core Application Code
- **`index.ts`** - Main MCP server entry point and tool registration
- **`config/api.ts`** - API configuration and environment setup
- **`types/index.ts`** - TypeScript type definitions and interfaces

### `/src/clockify-sdk/` - Clockify API Integration
- **`entries.ts`** - Time entry API operations (CRUD)
- **`projects.ts`** - Project management API calls
- **`users.ts`** - User information retrieval
- **`workspaces.ts`** - Workspace management operations

### `/src/tools/` - MCP Tool Implementations
- **`entries.ts`** - Time entry MCP tools (create, edit, delete, list)
- **`projects.ts`** - Project-related MCP tools
- **`users.ts`** - User information MCP tools
- **`workspaces.ts`** - Workspace MCP tools

### `/src/validation/` - Input Validation Schemas
- **`entries/`** - Time entry validation schemas
  - `create-entry-schema.ts` - New entry validation
  - `edit-entry-schema.ts` - Entry update validation
  - `delete-entry-schema.ts` - Entry deletion validation
  - `find-entry-schema.ts` - Entry search validation
- **`projects/`** - Project validation schemas
  - `find-project-schema.ts` - Project search validation

### `/test/` - Test Suite
- **`entries.test.ts`** - Time entry functionality tests
- **`users.test.ts`** - User operations tests
- **`workspaces.test.ts`** - Workspace functionality tests
- **`setup.ts`** - Test environment configuration

## Architectural Patterns

### Layered Architecture
1. **MCP Tools Layer** (`/tools/`) - Exposes functionality to AI clients
2. **SDK Layer** (`/clockify-sdk/`) - Handles Clockify API communication
3. **Validation Layer** (`/validation/`) - Ensures data integrity
4. **Configuration Layer** (`/config/`) - Manages environment and settings

### Core Components Relationships
- MCP Tools depend on SDK modules for API operations
- All inputs validated through Zod schemas before processing
- Centralized configuration management for API endpoints
- Type-safe interfaces throughout the application stack
