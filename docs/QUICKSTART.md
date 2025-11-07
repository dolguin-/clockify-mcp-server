# Quick Start Guide

Get started with Clockify MCP Server in minutes! This guide will walk you through your first interactions with the AI assistant.

## Prerequisites

- Clockify MCP Server installed and configured
- Claude Desktop or Amazon Q with MCP support
- Your Clockify API token configured

## Your First Time Entry

The simplest way to start is by logging time for work you just completed:

**Prompt:**
```
I just finished working on the authentication feature for 2 hours. Can you log that time in Clockify?
```

The AI will:
1. Get your current user information
2. List your workspaces
3. Show available projects
4. Create the time entry with your confirmation

## Common First Tasks

### 1. Check Your Workspaces
**Prompt:**
```
What workspaces do I have access to in Clockify?
```

### 2. View Today's Time Entries
**Prompt:**
```
Show me all my time entries for today
```

### 3. Log Time for a Specific Project
**Prompt:**
```
Log 3 hours of work on the Mobile App project from 9 AM to 12 PM today
```

### 4. Check Your Weekly Hours
**Prompt:**
```
How many hours did I work this week?
```

## Understanding the Workflow

Most interactions follow this pattern:

1. **You describe what you want** in natural language
2. **AI gathers context** (workspace, projects, user info)
3. **AI performs the action** using the appropriate tools
4. **You receive confirmation** with details

## Next Steps

- Explore [Time Entries Examples](./examples/TIME_ENTRIES.md) for more ways to log time
- Learn about [Reports](./examples/REPORTS.md) to analyze your time tracking
- Check [Scheduling](./examples/SCHEDULING.md) for capacity planning

## Tips for Better Results

✅ **Be specific about dates and times**
```
Log 2 hours yesterday from 2 PM to 4 PM
```

✅ **Mention project names when you know them**
```
Add 1.5 hours to the Website Redesign project
```

✅ **Use natural language**
```
I worked on bug fixes this morning for about 3 hours
```

❌ **Avoid being too vague**
```
Log some time
```

## Troubleshooting

**Issue:** AI can't find your project
- Try: "List all my projects" first, then use the exact project name

**Issue:** Time entry overlaps with existing entry
- Clockify doesn't allow overlapping entries. Delete or edit the existing entry first.

**Issue:** Can't create entry in workspace
- Ensure you have the correct permissions in that Clockify workspace
