# Scheduling Feature Implementation

## Overview
Added project assignments functionality to the Clockify MCP Server, enabling AI-powered retrieval of scheduled assignments for specific projects within date ranges.

## Implementation Details

### API Integration
- **Endpoint**: `https://api.clockify.me/api/v1`
- **Authentication**: Bearer token in Authorization header
- **Method**: GET to `/workspaces/{workspaceId}/scheduling/assignments/projects/totals/{projectId}`
- **Required Query Parameters**: `start` and `end` (ISO date format)

### Architecture Components

#### 1. Configuration (`src/config/api.ts`)
```typescript
scheduling: {
  assignments: {
    name: "get-project-assignments",
    description: "Get all scheduled assignments for a specific project in a workspace",
  },
}
```

#### 2. Types (`src/types/index.ts`)
- Added `TAssignmentsSchema` type for type-safe assignment operations
- Imported from validation schema using `z.infer<typeof AssignmentsSchema>`

#### 3. Validation Schema (`src/validation/scheduling/assignments-schema.ts`)
**Required Fields:**
- `workspaceId`: Workspace identifier
- `projectId`: Project identifier
- `start`: Start date for assignments query (auto-converted to Date)
- `end`: End date for assignments query (auto-converted to Date)

#### 4. SDK Service (`src/clockify-sdk/scheduling.ts`)
- `getProjectAssignments()` function with URLSearchParams for query construction
- Automatic date conversion to ISO strings for API compatibility
- Consistent error handling pattern

#### 5. MCP Tool (`src/tools/scheduling.ts`)
**Response Format:**
```
Project: [Project Name]
Client: [Client Name]
Status: Active/Archived
Billable: Yes/No
Total Hours: [Hours]h
Days with assignments: X/Y

Milestones:
1. [Milestone Name] - [Date]
```

#### 6. Server Integration (`src/index.ts`)
- Registered `getProjectAssignmentsTool` with MCP server
- Follows consistent tool registration pattern

## Usage Examples

### Basic Assignment Query
```typescript
{
  workspaceId: "workspace-id",
  projectId: "project-id",
  start: "2025-11-01T00:00:00.000Z",
  end: "2025-11-30T23:59:59.000Z"
}
```

## Data Fields Available
- **Project Info**: Name, client, color, archived status
- **Assignment Details**: Daily assignments with hasAssignment flag
- **Time Tracking**: Total hours allocated to project
- **Milestones**: Project milestones with dates and IDs
- **Time Range**: Filtered by start/end date parameters

## Benefits
- **Project Overview**: Complete project information including client and status
- **Time Tracking**: View total hours allocated to projects
- **Milestone Tracking**: Monitor project milestones and deadlines
- **AI Integration**: Natural language queries for project assignment information
- **Resource Planning**: Understand project scheduling within date ranges

## API Response Structure
```json
{
  "assignments": [
    {
      "date": "2019-08-24T14:15:22Z",
      "hasAssignment": true
    }
  ],
  "clientName": "Software Development",
  "milestones": [
    {
      "date": "2020-01-01T08:00:00Z",
      "id": "34a687e29ae1f428e7ebe303",
      "name": "Q3",
      "projectId": "5b641568b07987035750505e",
      "workspaceId": "64a687e29ae1f428e7ebe303"
    }
  ],
  "projectArchived": true,
  "projectBillable": true,
  "projectColor": "#000000",
  "projectId": "56b687e29ae1f428e7ebe504",
  "projectName": "Software Development",
  "totalHours": 490.5,
  "workspaceId": "64a687e29ae1f428e7ebe303"
}
```

## Implementation Notes
- All assignment queries require `start` and `end` query parameters
- Dates automatically converted to ISO format for API compatibility
- URLSearchParams used for proper query string construction
- Response is an object with project totals, not individual user assignments
- Configurable logging via DEBUG environment variable
