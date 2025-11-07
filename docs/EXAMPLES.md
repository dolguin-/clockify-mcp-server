# Clockify MCP Server - Examples & Use Cases

Complete guide to using Clockify MCP Server with AI assistants through natural language prompts.

## 📚 Documentation Structure

### [Quick Start Guide](./QUICKSTART.md)
Get started in minutes with your first time entries and basic operations.

### Examples by Category

1. **[Time Entries](./examples/TIME_ENTRIES.md)**
   - Creating, editing, and deleting time entries
   - Listing and searching entries
   - Bulk operations and retroactive logging

2. **[Reports](./examples/REPORTS.md)**
   - Generating detailed reports
   - Filtering and analytics
   - Financial reports and comparisons

3. **[Scheduling & Capacity](./examples/SCHEDULING.md)**
   - Project assignments and milestones
   - User capacity tracking
   - Resource planning and workload analysis

4. **[Workspace Management](./examples/WORKSPACE_MANAGEMENT.md)**
   - Managing workspaces and projects
   - User management and team collaboration
   - Tasks and project structure

## 🎯 Common Use Cases

### For Individual Contributors

**Daily Time Tracking**
```
Log 2 hours on the API Development project from 9 AM to 11 AM today
```

**Weekly Review**
```
Show me all my time entries for this week grouped by project
```

**Retroactive Logging**
```
I forgot to log yesterday. I worked 8 hours on the Backend project from 9 AM to 5 PM
```

### For Project Managers

**Team Capacity Check**
```
What's the total team capacity for this sprint?
```

**Project Status**
```
Show me all time logged to the Mobile App project this month and compare it to the assigned hours
```

**Resource Allocation**
```
Who has available capacity to take on a new 20-hour task this week?
```

### For Finance/Billing

**Invoice Preparation**
```
Generate a report of all approved billable hours for Acme Corp in November, grouped by project
```

**Billable Ratio**
```
What percentage of our team's time was billable this quarter?
```

**Cost Analysis**
```
Show me the cost breakdown for the Infrastructure project this year
```

### For Team Leads

**Workload Distribution**
```
Show me how work is distributed across the team this month and identify overallocated members
```

**Milestone Tracking**
```
What milestones are due in the next 30 days across all projects?
```

**Team Performance**
```
Compare actual hours logged vs assigned hours for each team member this sprint
```

## 💡 Prompt Patterns

### Time-Based Patterns

**Relative Dates**
- "today", "yesterday", "this week", "last month"
- "from Monday to Friday"
- "in the last 7 days"

**Specific Dates**
- "on November 15, 2024"
- "from 9 AM to 5 PM"
- "between October 1 and October 31"

**Time Ranges**
- "this morning" (AI will ask for specifics)
- "this afternoon from 2 PM to 4 PM"
- "during lunch break"

### Action Patterns

**Create/Add**
- "Log...", "Add...", "Create...", "Register..."
- "I worked on..."
- "Track time for..."

**Read/View**
- "Show me...", "List...", "Display...", "What..."
- "Get...", "Find...", "Search..."
- "Generate a report..."

**Update/Modify**
- "Change...", "Update...", "Edit...", "Modify..."
- "Move to...", "Switch to..."
- "Make it..."

**Delete/Remove**
- "Delete...", "Remove...", "Clear..."
- "Get rid of..."

### Filter Patterns

**By Project**
- "on the Mobile App project"
- "for the Backend project"
- "associated with API Development"

**By Date**
- "for this week"
- "in November"
- "from last Monday to Friday"

**By Status**
- "billable hours"
- "non-billable time"
- "approved entries"

**By User**
- "for John Smith"
- "my entries"
- "team members' time"

## 🔄 Multi-Step Workflows

### Complete Time Entry Workflow
```
1. "What workspaces do I have?"
2. "Show me projects in the Engineering workspace"
3. "Log 3 hours to the API Development project from 9 AM to 12 PM today"
4. "Show me today's entries to confirm"
```

### Weekly Review Workflow
```
1. "Show me all my time entries for this week"
2. "Break down my hours by project"
3. "What's my billable percentage this week?"
4. "Generate a detailed report for this week"
```

### Resource Planning Workflow
```
1. "Show me all workspace users"
2. "What's the team capacity for next week?"
3. "Show me current project assignments"
4. "Who has available capacity for a new project?"
```

### Invoice Preparation Workflow
```
1. "List all projects for Acme Corp"
2. "Show me all billable hours for Acme Corp this month"
3. "Filter for approved entries only"
4. "Generate an invoice-ready report with earned amounts"
```

## 🎨 Natural Language Tips

### ✅ Good Prompts

**Specific and Clear**
```
Log 2 hours of code review on the Backend project from 2 PM to 4 PM today
```

**Context-Rich**
```
I worked on fixing the authentication bug for 1.5 hours this morning. Log it to the Security project as billable.
```

**Action-Oriented**
```
Show me all uninvoiced billable hours from last month grouped by client
```

### ❌ Avoid

**Too Vague**
```
Log some time
```

**Missing Context**
```
Show entries
```

**Ambiguous**
```
Change that thing
```

## 🚀 Advanced Patterns

### Conditional Operations
```
If I have any time entries without descriptions today, show them to me
```

### Comparative Analysis
```
Compare my hours this week vs last week and show the percentage change
```

### Bulk Operations
```
I worked on three tasks today:
- Code review: 1 hour
- Development: 4 hours
- Testing: 2 hours
Log all to the Web App project
```

### Complex Filtering
```
Show me billable hours on active projects for the last 30 days, excluding entries without descriptions, grouped by project
```

## 📊 Reporting Patterns

### Summary Reports
```
Give me a high-level summary of this month's work
```

### Detailed Reports
```
I need a detailed breakdown of every entry from last week with all metadata
```

### Analytical Reports
```
Analyze my time distribution across projects for Q4 and identify trends
```

### Financial Reports
```
Show profit analysis for all projects this year with cost breakdown
```

## 🔗 Integration Patterns

### Cross-Tool Queries
```
Show me my capacity for this week and compare it with my actual logged hours
```

### Hierarchical Queries
```
List all projects, then for each project show assigned users and their time entries this month
```

### Validation Queries
```
Check if my time entries match my project assignments for this week
```

## 📝 Best Practices

1. **Start Simple**: Begin with basic queries and add complexity as needed
2. **Be Specific**: Include dates, times, and project names when known
3. **Use Context**: Reference previous queries ("the last entry", "that project")
4. **Confirm Actions**: Review before confirming destructive operations
5. **Iterate**: Refine your query based on results
6. **Save Patterns**: Reuse successful prompt patterns for similar tasks

## 🆘 Troubleshooting Prompts

**When AI Can't Find Something**
```
List all projects so I can see the exact names
```

**When Dates Are Unclear**
```
What's today's date? Then show me entries for the last 7 days
```

**When Results Are Too Large**
```
Show me the first 50 results, then I'll ask for more if needed
```

**When You Need Context**
```
Explain what information you need from me to complete this task
```

## 🎓 Learning Path

### Beginner
1. Start with [Quick Start Guide](./QUICKSTART.md)
2. Practice basic time entries
3. Learn to list and view entries

### Intermediate
4. Explore [Time Entries](./examples/TIME_ENTRIES.md) for advanced operations
5. Try [Workspace Management](./examples/WORKSPACE_MANAGEMENT.md)
6. Generate basic reports

### Advanced
7. Master [Reports](./examples/REPORTS.md) with complex filters
8. Use [Scheduling](./examples/SCHEDULING.md) for resource planning
9. Create custom workflows combining multiple tools

## 📖 Additional Resources

- [GitHub Repository](https://github.com/dolguin-/clockify-mcp-server)
- [Clockify API Documentation](https://docs.clockify.me/)
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)

## 💬 Community Examples

Share your own prompt patterns and use cases by contributing to the repository!
