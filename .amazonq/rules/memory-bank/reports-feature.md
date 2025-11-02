# Reports Feature Implementation

## Overview
Added comprehensive detailed reports functionality to the Clockify MCP Server, enabling AI-powered time tracking analytics and reporting.

## Implementation Details

### API Integration
- **Endpoint**: `https://reports.api.clockify.me/v1`
- **Authentication**: X-Api-Key header with CLOCKIFY_API_TOKEN
- **Method**: POST to `/workspaces/{workspaceId}/reports/detailed`

### Architecture Components

#### 1. Configuration (`src/config/api.ts`)
```typescript
reports: {
  detailed: {
    name: "get-detailed-reports",
    description: "Get detailed time entry reports with advanced filtering options including date ranges, projects, users, and more",
  },
}
```

#### 2. Types (`src/types/index.ts`)
- Added `TReportsSchema` type for type-safe report operations
- Imported from validation schema using `z.infer<typeof ReportsSchema>`

#### 3. Validation Schema (`src/validation/reports/reports-schema.ts`)
**Required Fields:**
- `workspaceId`: Workspace identifier
- `dateRangeStart`: Report start date (auto-converted to ISO)
- `dateRangeEnd`: Report end date (auto-converted to ISO)
- `detailedFilter`: Pagination config (page, pageSize)

**Optional Filters:**
- `description`: Text search in descriptions
- `billable`: Filter by billable status
- `archived`: Include archived entries
- `withoutDescription`: Entries without description
- `amountShown`: EARNED | COST | PROFIT | HIDE_AMOUNT | EXPORT
- `approvalState`: APPROVED | UNAPPROVED | ALL
- `invoicingState`: INVOICED | UNINVOICED | ALL
- `sortOrder`: ASCENDING | DESCENDING
- `projects`: Project filtering with status
- `users`: User filtering with status
- `timeZone`: Report timezone
- `dateFormat`: Date format (default: YYYY-MM-DD)
- `timeFormat`: Time format (default: THH:MM:SS.ssssss)

#### 4. SDK Service (`src/clockify-sdk/reports.ts`)
- Dedicated reports API client with separate base URL
- `getDetailedReport()` function with comprehensive parameter handling
- Automatic date conversion to ISO strings
- Optional parameter spreading for clean API calls

#### 5. MCP Tool (`src/tools/reports.ts`)
**Response Format:**
```
Found X time entries (Total: Xh Xm):

1. [Description]
   Project: [Project Name]
   User: [User Name]
   User Email: [User Email]
   Time: [Start] - [End]
   Duration: [Duration in seconds]
   Billable: Yes/No
   Tags: [Tag1, Tag2, ...]
   Task: [Task Name]
   Client: [Client Name]
   Project Color: [Color]
   Hourly Rate: [Rate]
   Amount: [Calculated Amount]
   Entry ID: [Unique ID]
```

#### 6. Server Integration (`src/index.ts`)
- Registered `getReportsTool` with MCP server
- Follows consistent tool registration pattern

## Usage Examples

### Basic Weekly Report
```typescript
{
  workspaceId: "workspace-id",
  dateRangeStart: "2025-10-27T00:00:00.000Z",
  dateRangeEnd: "2025-11-02T23:59:59.000Z",
  detailedFilter: { pageSize: 50, page: 1 }
}
```

### Filtered Report
```typescript
{
  workspaceId: "workspace-id",
  dateRangeStart: "2025-10-27T00:00:00.000Z",
  dateRangeEnd: "2025-11-02T23:59:59.000Z",
  detailedFilter: { pageSize: 100, page: 1 },
  billable: true,
  amountShown: "EARNED",
  projects: { contains: "ACTIVE" },
  users: { contains: "ACTIVE" }
}
```

## Data Fields Available
- **Basic Info**: Description, project, user details
- **Time Tracking**: Start/end times, duration, billable status
- **Organization**: Tags, tasks, clients, project colors
- **Financial**: Hourly rates, calculated amounts
- **Metadata**: Entry IDs, approval states, invoicing status

## Benefits
- **Comprehensive Analytics**: Full visibility into time tracking data
- **AI Integration**: Natural language queries for reports
- **Flexible Filtering**: Advanced filtering by multiple criteria
- **Financial Insights**: Cost and earnings calculations
- **User Attribution**: Clear user identification and email tracking
- **Project Management**: Detailed project and client information

## Commit History
1. `feat(config): add reports tools configuration`
2. `feat(types): add reports schema type definition`
3. `feat(validation): add comprehensive reports schema validation`
4. `feat(sdk): add reports service for Clockify Reports API`
5. `feat(tools): add detailed reports MCP tool`
6. `feat(server): integrate reports tool into MCP server`
7. `feat(tools): enhance reports tool to display comprehensive API data`
