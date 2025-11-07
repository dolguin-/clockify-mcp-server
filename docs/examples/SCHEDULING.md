# Scheduling & Capacity Examples

Manage project assignments, track team capacity, and plan resources through natural language.

## Project Assignments

### View Project Schedule
**Prompt:**
```
Show me all assignments for the Mobile App project in November
```

**Response includes:**
- Project name and client
- Project status (Active/Archived)
- Billable status
- Total hours allocated
- Days with assignments
- Project milestones

---

### Check Project Milestones
**Prompt:**
```
What are the upcoming milestones for the Backend Redesign project?
```

**What happens:**
- Lists all project milestones
- Shows milestone dates
- Displays milestone names
- Helps with deadline tracking

---

### Project Assignment Summary
**Prompt:**
```
Give me an overview of the Q4 Website project assignments from October to December
```

**Response includes:**
- Total hours allocated
- Assignment distribution across months
- Milestone timeline
- Project health indicators

## Workspace Assignments

### All Current Assignments
**Prompt:**
```
Show me all active assignments in the workspace for this month
```

**Response includes:**
- User IDs assigned
- Project IDs
- Assignment status
- Time periods
- Estimated hours
- Assignment IDs

**Tip:** Use with get-workspace-users and get-projects to get names

---

### Assignments by Date Range
**Prompt:**
```
List all workspace assignments from November 1 to November 30
```

**What happens:**
- Retrieves all assignments in range
- Shows user and project associations
- Displays estimates
- Paginated results (200 per page)

---

### Paginated Assignment View
**Prompt:**
```
Show me the first 50 assignments for this quarter
```

**What happens:**
- Returns page 1 with 50 items
- Indicates total assignments
- Can request next pages

---

### Next Page of Assignments
**Prompt:**
```
Show me the next page of assignments
```

**What happens:**
- Retrieves page 2
- Continues from previous query
- Shows page number and size

## User Capacity

### Individual Capacity Check
**Prompt:**
```
What's John's capacity for this week?
```

**Response includes:**
- User name and status
- Capacity per day (in hours)
- Total working days
- Daily hours breakdown
- Specific dates with hours

---

### Monthly Capacity Overview
**Prompt:**
```
Show me my capacity for December 2024
```

**What happens:**
- Retrieves capacity data for full month
- Shows daily capacity
- Lists working days
- Highlights days with assignments

---

### Capacity vs Actual
**Prompt:**
```
Compare my capacity vs actual hours logged for last week
```

**What happens:**
- Gets capacity data
- Retrieves time entries
- Compares allocated vs logged
- Shows over/under utilization

---

### Team Member Capacity
**Prompt:**
```
What's the total capacity for user ID abc123 in November?
```

**Response includes:**
- User information
- Daily capacity (e.g., 8h/day)
- Working days count
- Total available hours
- Day-by-day breakdown

## Resource Planning

### Project Resource Check
**Prompt:**
```
How many hours are allocated to the API Development project this month?
```

**What happens:**
- Gets project assignments
- Calculates total hours
- Shows assignment distribution
- Identifies resource allocation

---

### Overallocation Detection
**Prompt:**
```
Show me all users with more than 40 hours assigned this week
```

**What happens:**
- Checks all workspace assignments
- Calculates per-user totals
- Identifies overallocated users
- Helps prevent burnout

---

### Available Capacity
**Prompt:**
```
Who has available capacity this week?
```

**What happens:**
- Gets all user capacities
- Compares with assignments
- Shows users with free hours
- Helps with task assignment

## Milestone Management

### Upcoming Milestones
**Prompt:**
```
What milestones are due in the next 30 days?
```

**What happens:**
- Checks all project assignments
- Filters milestones by date
- Shows upcoming deadlines
- Sorted by date

---

### Project Milestone Timeline
**Prompt:**
```
Show me the milestone timeline for the Infrastructure project
```

**Response includes:**
- All project milestones
- Milestone dates
- Milestone names
- Project context

---

### Milestone Status Check
**Prompt:**
```
Are we on track for the Q4 Launch milestone?
```

**What happens:**
- Finds milestone date
- Checks current progress
- Compares with assignments
- Provides status update

## Team Capacity Planning

### Weekly Team Capacity
**Prompt:**
```
What's the total team capacity for this week?
```

**What happens:**
- Gets capacity for all users
- Sums daily capacities
- Shows team-wide availability
- Helps with sprint planning

---

### Department Capacity
**Prompt:**
```
Show me the capacity for all developers in November
```

**What happens:**
- Filters users by role/team
- Aggregates capacity data
- Shows department totals
- Useful for resource planning

---

### Capacity Trends
**Prompt:**
```
How has team capacity changed over the last 3 months?
```

**What happens:**
- Retrieves historical capacity
- Compares month-over-month
- Shows trends
- Identifies patterns

## Assignment Management

### Assignment Details
**Prompt:**
```
Show me details for assignment ID xyz789
```

**Response includes:**
- User assigned
- Project assigned to
- Time period
- Estimated hours
- Status

---

### User's Assignments
**Prompt:**
```
What projects is Sarah assigned to this month?
```

**What happens:**
- Filters assignments by user
- Shows all project assignments
- Displays time periods
- Lists estimates

---

### Project Team
**Prompt:**
```
Who's assigned to the Mobile App project in December?
```

**What happens:**
- Filters by project
- Shows all assigned users
- Displays time allocations
- Helps understand team composition

## Workload Analysis

### Individual Workload
**Prompt:**
```
How many hours is Alex assigned for this sprint?
```

**Response includes:**
- Total assigned hours
- Daily breakdown
- Project distribution
- Capacity comparison

---

### Project Workload
**Prompt:**
```
What's the total workload for the Backend project this quarter?
```

**What happens:**
- Sums all assignments
- Shows total hours
- Lists all assigned users
- Calculates project capacity

---

### Workload Distribution
**Prompt:**
```
Show me how work is distributed across the team this month
```

**Response includes:**
- Hours per team member
- Percentage distribution
- Over/under allocated users
- Balance analysis

## Advanced Scheduling

### Multi-Project Assignment
**Prompt:**
```
Show me all users assigned to multiple projects this week
```

**What happens:**
- Analyzes all assignments
- Identifies users on multiple projects
- Shows project split
- Helps manage context switching

---

### Assignment Gaps
**Prompt:**
```
Are there any days this month where I have no assignments?
```

**What happens:**
- Checks daily assignments
- Identifies gap days
- Shows available dates
- Helps with planning

---

### Capacity Utilization Rate
**Prompt:**
```
What's our team's capacity utilization rate for November?
```

**What happens:**
- Calculates: (assigned hours / total capacity) × 100
- Shows utilization percentage
- Identifies over/under utilization
- Helps optimize resource allocation

## Integration with Time Tracking

### Assignment vs Actual
**Prompt:**
```
Compare my assigned hours vs actual logged hours for the API project this week
```

**What happens:**
- Gets assignment data
- Retrieves time entries
- Compares planned vs actual
- Shows variance

---

### Unassigned Time
**Prompt:**
```
Show me time entries that don't match any assignments
```

**What happens:**
- Lists all time entries
- Compares with assignments
- Identifies unplanned work
- Helps improve planning

## Tips for Scheduling Queries

✅ **Specify date ranges**
```
Show assignments for November 1-30
```

✅ **Use pagination for large results**
```
Show first 50 assignments, page size 50
```

✅ **Combine with user/project tools**
```
First get workspace users, then check their capacity
```

✅ **Be specific about users/projects**
```
Check capacity for user ID abc123
```

❌ **Avoid vague requests**
```
Show me some assignments
```

## Common Scheduling Scenarios

### Sprint Planning
```
Show me team capacity for the next 2 weeks and current assignments
```

### Resource Allocation
```
Who has capacity to take on a new 20-hour project this month?
```

### Deadline Check
```
Do we have enough capacity to meet the December 15 milestone for Project X?
```

### Workload Balancing
```
Show me team workload distribution for this month and identify overallocated members
```

### Capacity Forecasting
```
What's our available team capacity for Q1 2025?
```

## Pagination Best Practices

### Large Workspace
```
Show me all assignments for this quarter, 100 per page
```

### Iterating Through Pages
```
Show me page 2 of workspace assignments
```

### Custom Page Size
```
Get all assignments with page size of 200
```

## Notes

- Assignment IDs are unique identifiers for tracking
- User IDs and Project IDs require additional lookups for names
- Capacity is measured in hours per day
- Working days exclude weekends and holidays
- Pagination defaults: 200 for assignments, 100 for capacity
