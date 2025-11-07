# Scheduling Feature Implementation

## Overview
Added comprehensive scheduling functionality to the Clockify MCP Server, including project assignments, workspace-wide assignments, and user capacity tracking for AI-powered resource planning and time management.

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
  allAssignments: {
    name: "get-all-assignments",
    description: "Get all scheduled assignments in a workspace within a date range with pagination support",
  },
  userCapacity: {
    name: "get-user-capacity",
    description: "Get total capacity of a user within a date range with pagination support",
  },
}
```

#### 2. Types (`src/types/index.ts`)
- Added `TAssignmentsSchema` type for project assignments
- Added `TAllAssignmentsSchema` type for workspace-wide assignments
- Added `TUserCapacitySchema` type for user capacity tracking
- All imported from validation schemas using `z.infer<typeof Schema>`

#### 3. Validation Schemas

**Project Assignments** (`src/validation/scheduling/assignments-schema.ts`):
- `workspaceId`: Workspace identifier
- `projectId`: Project identifier
- `start`: Start date (auto-converted to Date)
- `end`: End date (auto-converted to Date)

**All Assignments** (`src/validation/scheduling/all-assignments-schema.ts`):
- `workspaceId`: Workspace identifier
- `start`: Start date (auto-converted to Date)
- `end`: End date (auto-converted to Date)
- `sortColumn`: Optional sort column
- `sortOrder`: ASCENDING | DESCENDING
- `page`: Page number (default: 1)
- `pageSize`: Items per page (default: 200)

**User Capacity** (`src/validation/scheduling/user-capacity-schema.ts`):
- `workspaceId`: Workspace identifier
- `userId`: User identifier
- `start`: Start date (auto-converted to Date)
- `end`: End date (auto-converted to Date)
- `page`: Page number (default: 1)
- `pageSize`: Items per page (default: 100)

#### 4. SDK Service (`src/clockify-sdk/scheduling.ts`)
- `getProjectAssignments()`: Get assignments for specific project
- `getAllAssignments()`: Get all workspace assignments with pagination
- `getUserCapacity()`: Get user capacity totals with pagination
- URLSearchParams for query construction
- Automatic date conversion to ISO strings
- Consistent error handling pattern

#### 5. MCP Tools (`src/tools/scheduling.ts`)

**Project Assignments Response:**
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

**All Assignments Response:**
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

**User Capacity Response:**
```
User: [User Name]
Status: [Active/Inactive]
Capacity per Day: [hours]h
Working Days: X

Hours per Day:
- [Date]: [hours]h
- [Date]: [hours]h
```

#### 6. Server Integration (`src/index.ts`)
- Registered `getProjectAssignmentsTool` for project-specific assignments
- Registered `getAllAssignmentsTool` for workspace-wide assignments
- Registered `getUserCapacityTool` for user capacity tracking
- Follows consistent tool registration pattern

## Usage Examples

### Project Assignments
```typescript
{
  workspaceId: "workspace-id",
  projectId: "project-id",
  start: "2025-11-01T00:00:00.000Z",
  end: "2025-11-30T23:59:59.000Z"
}
```

### All Assignments with Pagination
```typescript
{
  workspaceId: "workspace-id",
  start: "2025-11-01T00:00:00.000Z",
  end: "2025-11-30T23:59:59.000Z",
  page: 1,
  pageSize: 50,
  sortOrder: "ASCENDING"
}
```

### User Capacity
```typescript
{
  workspaceId: "workspace-id",
  userId: "user-id",
  start: "2025-11-01T00:00:00.000Z",
  end: "2025-11-30T23:59:59.000Z",
  page: 1,
  pageSize: 100
}
```

## Data Fields Available

### Project Assignments
- **Project Info**: Name, client, color, archived status
- **Assignment Details**: Daily assignments with hasAssignment flag
- **Time Tracking**: Total hours allocated to project
- **Milestones**: Project milestones with dates and IDs

### All Assignments
- **User ID**: Unique identifier for assigned user
- **Project ID**: Unique identifier for assigned project
- **Status**: Assignment status
- **Period**: Start and end dates of assignment
- **Estimate**: Estimated hours for assignment
- **Assignment ID**: Unique assignment identifier

### User Capacity
- **User Info**: Name and status
- **Capacity**: Hours per day capacity
- **Working Days**: Total working days in period
- **Daily Breakdown**: Hours allocated per specific date

## Benefits
- **Project Overview**: Complete project information including client and status
- **Workspace Visibility**: View all assignments across entire workspace
- **User Capacity Planning**: Track individual user workload and availability
- **Time Tracking**: View total hours allocated to projects and users
- **Milestone Tracking**: Monitor project milestones and deadlines
- **AI Integration**: Natural language queries for scheduling information
- **Resource Planning**: Comprehensive resource allocation insights
- **Pagination Support**: Handle large datasets efficiently

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

## API Endpoints

### Project Assignments
- **Endpoint**: `/workspaces/{workspaceId}/scheduling/assignments/projects/totals/{projectId}`
- **Method**: GET
- **Returns**: Project totals with milestones

### All Assignments
- **Endpoint**: `/workspaces/{workspaceId}/scheduling/assignments/all`
- **Method**: GET
- **Returns**: Array of assignments with pagination

### User Capacity
- **Endpoint**: `/workspaces/{workspaceId}/scheduling/assignments/users/{userId}/totals`
- **Method**: GET
- **Returns**: User capacity with daily breakdown

## Implementation Notes
- All queries require `start` and `end` date parameters
- Dates automatically converted to ISO format
- URLSearchParams used for query string construction
- Pagination defaults: 200 for all assignments, 100 for user capacity
- User capacity converts seconds to hours for readability
- Configurable logging via DEBUG environment variable
