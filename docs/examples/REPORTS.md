# Reports Examples

Generate detailed time tracking reports and analytics through natural language.

## Basic Reports

### Weekly Report
**Prompt:**
```
Generate a report of all my time entries for this week
```

**Response includes:**
- All time entries with descriptions
- Project names and clients
- User information
- Time ranges and durations
- Billable status
- Total hours worked

---

### Monthly Report
**Prompt:**
```
Show me a detailed report for October 2024
```

**What happens:**
- Retrieves all entries from October 1-31
- Groups by project
- Shows daily breakdown
- Calculates total hours

---

### Today's Report
**Prompt:**
```
Give me a report of today's work
```

**Response includes:**
- All entries for current day
- Project distribution
- Total hours logged
- Billable vs non-billable breakdown

## Filtered Reports

### Billable Hours Report
**Prompt:**
```
Show me all billable hours for this month
```

**What happens:**
- Filters entries where billable = true
- Shows only billable time
- Calculates total billable hours
- Groups by project/client

---

### Project-Specific Report
**Prompt:**
```
Generate a report for all time logged to the Mobile App project in November
```

**What happens:**
- Filters by project name
- Shows all entries for that project
- Includes task breakdown if available
- Shows total hours on project

---

### Client Report
**Prompt:**
```
Show me all time entries for Acme Corp client this quarter
```

**What happens:**
- Filters by client name
- Shows all projects under that client
- Quarterly date range
- Total hours per project

---

### User Report
**Prompt:**
```
Generate a report showing all team members' hours for last week
```

**What happens:**
- Retrieves entries for all workspace users
- Groups by user
- Shows individual totals
- Workspace-wide summary

## Advanced Filtering

### Multiple Criteria Report
**Prompt:**
```
Show me billable hours on the Backend project for the last 30 days, excluding entries without descriptions
```

**What happens:**
- Filters by:
  - Project: Backend
  - Billable: true
  - Date range: last 30 days
  - Has description: true
- Shows matching entries only

---

### Approved Time Report
**Prompt:**
```
Generate a report of all approved time entries for this month
```

**What happens:**
- Filters by approval state: APPROVED
- Shows only approved entries
- Useful for invoicing

---

### Invoiced vs Uninvoiced
**Prompt:**
```
Show me all uninvoiced billable hours from last month
```

**What happens:**
- Filters by:
  - Billable: true
  - Invoicing state: UNINVOICED
- Ready for invoice generation

## Report Analytics

### Project Time Distribution
**Prompt:**
```
Break down my time by project for this month
```

**Response includes:**
- Hours per project
- Percentage distribution
- Project rankings by time
- Visual breakdown

---

### Daily Average Report
**Prompt:**
```
What's my average daily work hours for the past 2 weeks?
```

**What happens:**
- Calculates total hours
- Divides by working days
- Shows daily average
- Highlights outliers

---

### Billable Ratio Report
**Prompt:**
```
What percentage of my time was billable this month?
```

**Response includes:**
- Total hours worked
- Billable hours
- Non-billable hours
- Billable percentage

## Financial Reports

### Earnings Report
**Prompt:**
```
Show me total earnings for this month based on hourly rates
```

**What happens:**
- Calculates: hours × hourly rate
- Groups by project
- Shows total earnings
- Requires hourly rates configured

---

### Cost Report
**Prompt:**
```
Generate a cost report for the Development project this quarter
```

**What happens:**
- Shows project costs
- Based on team member rates
- Quarterly totals
- Cost breakdown by user

---

### Profit Report
**Prompt:**
```
Show profit analysis for all projects this year
```

**Response includes:**
- Revenue (earned amount)
- Costs (team costs)
- Profit margin
- Per-project breakdown

## Pagination & Large Reports

### Paginated Report
**Prompt:**
```
Show me the first 100 entries from last month
```

**What happens:**
- Returns first page (100 entries)
- Indicates if more pages available
- Can request next pages

---

### Next Page
**Prompt:**
```
Show me the next page of results
```

**What happens:**
- Retrieves page 2
- Continues from previous query
- Shows page number

## Export-Ready Reports

### Invoice Report
**Prompt:**
```
Generate an invoice-ready report for Client XYZ for November, showing only approved billable hours
```

**Filters applied:**
- Client: XYZ
- Date: November
- Billable: true
- Approval state: APPROVED
- Amount shown: EARNED

---

### Timesheet Report
**Prompt:**
```
Create a timesheet report for this week with all my entries sorted by date
```

**Response format:**
- Chronological order
- Daily grouping
- Entry details
- Daily and weekly totals

## Comparison Reports

### Week-over-Week
**Prompt:**
```
Compare my hours this week vs last week
```

**Response includes:**
- This week total
- Last week total
- Difference
- Percentage change

---

### Project Comparison
**Prompt:**
```
Compare time spent on Frontend vs Backend projects this month
```

**Response includes:**
- Hours per project
- Percentage distribution
- Task breakdown
- Trend analysis

## Custom Date Ranges

### Specific Date Range
**Prompt:**
```
Report for October 15 to November 15, 2024
```

---

### Quarter Report
**Prompt:**
```
Generate Q4 2024 report
```

---

### Year-to-Date
**Prompt:**
```
Show me all my time entries from January 1st until today
```

## Report Formats

### Summary Format
**Prompt:**
```
Give me a summary of this week's work
```

**Response:**
- High-level overview
- Total hours
- Top projects
- Key metrics

---

### Detailed Format
**Prompt:**
```
I need a detailed breakdown of every entry from last week
```

**Response:**
- Every individual entry
- All metadata
- Tags, tasks, descriptions
- Complete information

---

### Grouped Format
**Prompt:**
```
Show me this month's hours grouped by project and task
```

**Response:**
- Hierarchical grouping
- Project → Task → Entries
- Subtotals at each level

## Tips for Better Reports

✅ **Specify date ranges clearly**
```
Report for November 1-30, 2024
```

✅ **Use filters to narrow results**
```
Only billable hours on active projects
```

✅ **Request specific metrics**
```
Show total hours and earnings
```

✅ **Mention sorting preferences**
```
Sort by project name
```

❌ **Avoid vague requests**
```
Show me some reports
```

## Common Report Scenarios

### End of Month Invoicing
```
Generate a report of all approved billable hours for [Client Name] in [Month], grouped by project, showing earned amounts
```

### Performance Review
```
Show my total hours, project distribution, and billable ratio for the past 6 months
```

### Budget Tracking
```
Report on Project X showing total hours and costs vs the 100-hour budget
```

### Team Capacity
```
Show total hours logged by all team members this week
```
