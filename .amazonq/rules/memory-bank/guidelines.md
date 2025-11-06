# Development Guidelines

## Code Quality Standards

### Import Organization
- **Environment Configuration First**: Always import and configure `dotenv` at the top of entry files
- **External Dependencies**: Group external library imports (axios, zod, @modelcontextprotocol/sdk)
- **Internal Imports**: Organize by layer - config, types, services, tools
- **Relative Imports**: Use relative paths for internal modules (`../config/api`, `./entries`)

### TypeScript Patterns
- **Strict Type Safety**: All functions and variables must have explicit types
- **Zod Schema Integration**: Use `z.infer<typeof Schema>` for type extraction from validation schemas
- **Interface Definitions**: Define clear interfaces for external API responses and internal data structures
- **Generic Type Usage**: Leverage TypeScript generics for reusable components

### Error Handling Standards
- **Consistent Error Messages**: Use template `Failed to [action] [resource]: ${error.message}`
- **Try-Catch Blocks**: Wrap all async operations in try-catch with meaningful error context
- **Error Propagation**: Re-throw errors with additional context rather than swallowing them
- **Type-Safe Error Handling**: Cast errors as `any` when accessing `.message` property

### Logging Standards
- **Configurable Logger**: Use `logger` from `config/logger.ts` instead of console methods
- **Debug Logs**: Use `logger.debug()` for development/diagnostic information
- **Error Logs**: Use `logger.error()` for exceptions and critical failures
- **Info Logs**: Use `logger.info()` for server lifecycle events
- **Stderr Output**: All logs write to stderr to avoid interfering with MCP protocol on stdout
- **DEBUG Flag**: Control logging verbosity via DEBUG environment variable

## Architectural Patterns

### Service Layer Pattern
```typescript
function ServiceName(api: AxiosInstance) {
  async function operation(params: TypedParams) {
    // Implementation
  }
  return { operation };
}
export const serviceName = ServiceName(api);
```

### MCP Tool Configuration Pattern
```typescript
export const toolName: McpToolConfig = {
  name: TOOLS_CONFIG.category.action.name,
  description: TOOLS_CONFIG.category.action.description,
  parameters: {
    // Zod schema definitions with .describe() for each field
  },
  handler: async (params: TypedParams): Promise<McpResponse> => {
    // Implementation with error handling
  },
};
```

### Response Formatting Standard
```typescript
return {
  content: [
    {
      type: "text",
      text: "Formatted response message",
    },
  ],
};
```

## Validation and Schema Patterns

### Zod Schema Definitions
- **Required Fields**: Use `z.string().describe("Clear description")`
- **Optional Fields**: Chain `.optional()` and `.default(value)` when appropriate
- **Date Handling**: Use `z.coerce.date()` for automatic date parsing
- **Descriptive Documentation**: Every schema field must have a `.describe()` with clear purpose

### Parameter Validation
- **Input Sanitization**: Remove internal fields (workspaceId, timeEntryId) from request bodies
- **URL Construction**: Use `URLSearchParams` for query string building
- **Type Coercion**: Leverage Zod's coercion features for date and number handling

## Testing Standards

### Test Structure
- **Node.js Test Runner**: Use built-in `node:test` module with `describe` and `it`
- **Setup and Teardown**: Implement `after` hooks for cleanup (client connections)
- **Shared Test Data**: Use constants for workspace IDs and project IDs from setup module
- **State Management**: Track created resources (IDs) for subsequent test operations

### Assertion Patterns
- **Response Validation**: Assert on response content structure and message prefixes
- **Success Messages**: Verify standardized success message formats
- **ID Extraction**: Use regex patterns to extract IDs from response text for chaining operations

### Test Data Management
- **Time Calculations**: Create relative dates using `setHours()` for consistent test timing
- **Resource Lifecycle**: Create → Edit → Delete pattern for comprehensive testing
- **Error Scenarios**: Test both success and failure paths with appropriate assertions

## API Integration Patterns

### HTTP Client Configuration
- **Centralized Configuration**: Single axios instance with shared configuration
- **Authentication**: Bearer token in Authorization header set globally
- **Base URL Management**: Use environment variables for API endpoints
- **Request/Response Interceptors**: Implement consistent error handling and logging

### URL Construction
- **Template Literals**: Use template strings for dynamic URL paths
- **Query Parameters**: Construct using URLSearchParams for proper encoding
- **Absolute URLs**: Use full URLs for specific endpoints when needed

## Configuration Management

### Environment Variables
- **Required Variables**: CLOCKIFY_API_TOKEN, CLOCKIFY_API_URL
- **Optional Variables**: DEBUG (true/false) for logging control
- **Default Values**: Provide sensible defaults where possible
- **Type Safety**: Validate environment variables through Zod schemas
- **Local Development**: Support `--local` flag for development mode

### Tool Registration
- **Centralized Registration**: Register all tools in main server file
- **Consistent Naming**: Use kebab-case for tool names
- **Parameter Passing**: Pass complete tool configuration objects
- **Handler Binding**: Maintain proper `this` context for tool handlers
