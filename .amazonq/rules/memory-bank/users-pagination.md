# Users Pagination Feature

## Overview
Added pagination support to the workspace users tool, enabling efficient retrieval of large user lists with configurable page size and page number.

## Implementation Details

### API Integration
- **Endpoint**: `https://api.clockify.me/api/v1`
- **Authentication**: Bearer token in Authorization header
- **Method**: GET to `/workspaces/{workspaceId}/users`
- **Query Parameters**: `page` and `page-size`

### Architecture Components

#### 1. Validation Schema (`src/validation/users/find-users-schema.ts`)
**Required Fields:**
- `workspaceId`: Workspace identifier

**Optional Fields:**
- `page`: Page number (default: 1)
- `pageSize`: Items per page (default: 50)

#### 2. SDK Service (`src/clockify-sdk/users.ts`)
- Updated `fetchByWorkspace()` to accept pagination parameters
- URLSearchParams for query construction
- Maintains backward compatibility with existing calls

#### 3. MCP Tool (`src/tools/users.ts`)
**Updated Response Format:**
```
Found X user(s) in workspace (Page Y, Z per page):

1. Name: [User Name]
   Email: [User Email]
   Status: Active/Inactive
   User ID: [User ID]
```

#### 4. Types (`src/types/index.ts`)
- Updated `TFindUsersSchema` to include pagination parameters
- Type-safe through Zod schema inference

## Usage Examples

### Default Pagination
```typescript
{
  workspaceId: "workspace-id"
  // Uses defaults: page=1, pageSize=50
}
```

### Custom Pagination
```typescript
{
  workspaceId: "workspace-id",
  page: 2,
  pageSize: 100
}
```

### First Page with Small Size
```typescript
{
  workspaceId: "workspace-id",
  page: 1,
  pageSize: 10
}
```

## Benefits
- **Large Workspace Support**: Handle workspaces with many users efficiently
- **Configurable Page Size**: Adjust based on use case (10-200 users per page)
- **Memory Efficient**: Load only needed users instead of entire list
- **AI Integration**: Natural language queries with pagination
- **Backward Compatible**: Existing calls work with default pagination

## Implementation Notes
- Default page size: 50 users
- Default page number: 1 (first page)
- URLSearchParams used for query string construction
- Response includes pagination info in message
- Maintains existing response format with added pagination details

## Testing
- Added test case in `test/users.test.ts`
- Verifies pagination parameters are accepted
- Confirms response structure with pagination info

## Commit History
1. `feat(validation): add pagination to workspace users schema`
2. `feat(sdk): add pagination support to fetchByWorkspace`
3. `feat(tools): add pagination to get-workspace-users tool`
4. `test(users): add pagination test case`
