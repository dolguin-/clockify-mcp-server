# All Assignments Feature Implementation

## Overview
Added workspace-wide assignments retrieval functionality to the Clockify MCP Server, enabling AI-powered queries for all scheduled assignments within a date range with pagination support.

## Implementation Details

### API Integration
- **Endpoint**: `https://api.clockify.me/api/v1`
- **Authentication**: Bearer token in Authorization header
- **Method**: GET to `/workspaces/{workspaceId}/scheduling/assignments/all`
- **Required Query Parameters**: `start` and `end` (ISO date format)
- **Optional Query Parameters**: `sort-column`, `sort-order`, `page`, `page-size`

### Architecture Components

#### 1. Configuration (`src/config/api.ts`)
```typescript
scheduling: {
  allAssignments: {
    name: "get-all-assignments",
    description: "Get all scheduled assignments in a workspace within a date range with pagination support",
  },
}
```

#### 2. Types (`src/types/index.ts`)
- Added `TAllAssignmentsSchema` type for type-safe operations
- Imported from validation schema using `z.infer<typeof AllAssignmentsSchema>`

#### 3. Validation Schema (`src/validation/scheduling/all-assignments-schema.ts`)
**Required Fields:**
- `workspaceId`: Workspace identifier
- `start`: Start date (auto-converted to Date)
- `end`: End date (auto-converted to Date)

**Optional Fields:**
- `sortColumn`: Column to sort by
- `sortOrder`: ASCENDING | DESCENDING
- `page`: Page number (default: 1)
- `pageSize`: Items per page (default: 200)

#### 4. SDK Service (`src/clockify-sdk/scheduling.ts`)
- `getAllAssignments()` function with pagination support
- URLSearchParams for query construction
- Automatic date conversion to ISO strings
- Optional sort parameters handling

#### 5. MCP Tool (`src/tools/scheduling.ts`)
**Response Format:**
```
Found X assignment(s) (Page Y, Z per page):

1. User ID: [userId]
   Project ID: [projectId]
   Status: [status]
   Period: [start] to [end]
   Estimate: [hours]h
   Assignment ID: [id]

💡 Tip: Use get-workspace-users to get user names and get-projects to get project names.
```

#### 6. Server Integration (`src/index.ts`)
- Registered `getAllAssignmentsTool` with MCP server
- Follows consistent tool registration pattern

## Usage Examples

### Basic Query
```typescript
{
  workspaceId: "workspace-id",
  start: "2025-10-01T00:00:00.000Z",
  end: "2025-10-31T23:59:59.000Z"
}
```

### With Pagination
```typescript
{
  workspaceId: "workspace-id",
  start: "2025-10-01T00:00:00.000Z",
  end: "2025-10-31T23:59:59.000Z",
  page: 1,
  pageSize: 50
}
```

### With Sorting
```typescript
{
  workspaceId: "workspace-id",
  start: "2025-10-01T00:00:00.000Z",
  end: "2025-10-31T23:59:59.000Z",
  sortColumn: "userId",
  sortOrder: "ASCENDING"
}
```

## Data Fields Available
- **User ID**: Unique identifier for assigned user
- **Project ID**: Unique identifier for assigned project
- **Status**: Assignment status
- **Period**: Start and end dates of assignment
- **Estimate**: Estimated hours for assignment
- **Assignment ID**: Unique assignment identifier

## AI Integration
The tool is designed to work seamlessly with AI assistants:
- Returns User IDs and Project IDs
- AI automatically calls `get-workspace-users` to resolve user names
- AI automatically calls `get-projects` to resolve project names
- Presents unified, human-readable results to users

## Benefits
- **Workspace Overview**: Complete view of all assignments
- **Pagination Support**: Handle large datasets efficiently (default 200 per page)
- **Flexible Filtering**: Date range and sorting options
- **AI Enhancement**: Automatic enrichment with user and project names
- **Resource Planning**: Understand team allocation across projects

## Implementation Notes
- Default pagination: 200 items per page
- Dates automatically converted to ISO format
- URLSearchParams used for proper query string construction
- Response is an array of assignment objects
- Configurable logging via DEBUG environment variable

## Commit History
1. `feat(config): add get-all-assignments tool configuration`
2. `feat(validation): add all assignments schema with pagination`
3. `feat(types): add TAllAssignmentsSchema type definition`
4. `feat(sdk): add getAllAssignments service function`
5. `feat(tools): add getAllAssignments MCP tool`
6. `feat(server): integrate getAllAssignments tool`
7. `test(scheduling): add tests for getAllAssignments`
