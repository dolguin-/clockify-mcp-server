# Workspace & Project Management Examples

Manage workspaces, projects, users, and tasks through natural language.

## Workspace Operations

### List All Workspaces
**Prompt:**
```
What workspaces do I have access to?
```

**Response includes:**
- Workspace names
- Workspace IDs
- Access level

---

### Get Current Workspace
**Prompt:**
```
Which workspace am I currently using?
```

**What happens:**
- Shows active workspace
- Displays workspace details
- Lists available workspaces

---

### Switch Context
**Prompt:**
```
I want to work with the "Development Team" workspace
```

**What happens:**
- AI notes the workspace preference
- Uses that workspace for subsequent operations
- Confirms the switch

## Project Management

### List All Projects
**Prompt:**
```
Show me all projects in my workspace
```

**Response includes:**
- Project names
- Project IDs
- Client associations
- Active/archived status

---

### Find Specific Project
**Prompt:**
```
Do I have a project called "Mobile App Redesign"?
```

**What happens:**
- Searches projects by name
- Shows matching projects
- Displays project details

---

### Projects by Client
**Prompt:**
```
What projects do I have for Acme Corp?
```

**What happens:**
- Filters projects by client name
- Lists all matching projects
- Shows project details

---

### Active Projects Only
**Prompt:**
```
List all active projects
```

**What happens:**
- Filters out archived projects
- Shows only active projects
- Useful for current work

## User Management

### Get Current User Info
**Prompt:**
```
What's my user ID in Clockify?
```

**Response includes:**
- User ID
- User name
- Email address
- Status (Active/Inactive)

---

### List Workspace Users
**Prompt:**
```
Who else is in my workspace?
```

**Response includes:**
- All user names
- Email addresses
- User IDs
- Active/inactive status

---

### Paginated User List
**Prompt:**
```
Show me the first 20 users in the workspace
```

**What happens:**
- Returns page 1 with 20 users
- Shows pagination info
- Can request more pages

---

### Find User by Name
**Prompt:**
```
Is there a user named John Smith in the workspace?
```

**What happens:**
- Searches users by name
- Shows matching users
- Displays user details

---

### User Details
**Prompt:**
```
Get details for user ID abc123
```

**Response includes:**
- Full name
- Email
- Status
- User ID

## Task Management

### List Project Tasks
**Prompt:**
```
What tasks are available in the Backend project?
```

**Response includes:**
- Task names
- Task IDs
- Task status
- Associated project

---

### Find Specific Task
**Prompt:**
```
Is there a task called "Database Migration" in the Infrastructure project?
```

**What happens:**
- Lists project tasks
- Searches for matching task
- Shows task details

---

### Tasks for Time Entry
**Prompt:**
```
I want to log time to a task. What tasks are in the Mobile App project?
```

**What happens:**
- Lists all available tasks
- Shows task names and IDs
- Ready for time entry association

## Discovery & Setup

### First Time Setup
**Prompt:**
```
I'm new to Clockify. Can you help me understand my setup?
```

**AI will:**
1. Get your user information
2. List your workspaces
3. Show projects in each workspace
4. Explain the structure

---

### Workspace Overview
**Prompt:**
```
Give me an overview of my workspace
```

**Response includes:**
- Workspace name
- Number of projects
- Number of users
- Your role/permissions

---

### Project Structure
**Prompt:**
```
Show me the structure of the Development workspace
```

**Response includes:**
- All projects
- Projects grouped by client
- Active vs archived
- Task counts per project

## Search & Filter

### Search Projects
**Prompt:**
```
Find all projects with "API" in the name
```

**What happens:**
- Searches project names
- Shows matching results
- Displays project details

---

### Filter by Status
**Prompt:**
```
Show me only archived projects
```

**What happens:**
- Filters by archived status
- Lists archived projects
- Useful for historical reference

---

### Search Users
**Prompt:**
```
Find users with "developer" in their name
```

**What happens:**
- Searches user names
- Shows matching users
- Displays contact info

## Team Collaboration

### Team Members on Project
**Prompt:**
```
Who's working on the Mobile App project?
```

**What happens:**
- Gets project assignments
- Lists assigned users
- Shows time allocations

---

### User's Projects
**Prompt:**
```
What projects is Sarah working on?
```

**What happens:**
- Finds user by name
- Lists their project assignments
- Shows time allocations

---

### Project Team Size
**Prompt:**
```
How many people are assigned to the Backend project?
```

**What happens:**
- Gets project assignments
- Counts unique users
- Shows team size

## Workspace Context

### Set Default Workspace
**Prompt:**
```
Use the "Engineering" workspace for all my requests
```

**What happens:**
- AI remembers workspace preference
- Uses it for subsequent operations
- Confirms the setting

---

### Multi-Workspace Operations
**Prompt:**
```
Show me projects from both my Development and Production workspaces
```

**What happens:**
- Queries both workspaces
- Combines results
- Labels by workspace

---

### Workspace Comparison
**Prompt:**
```
Compare the number of projects in my two workspaces
```

**Response includes:**
- Project count per workspace
- Comparison metrics
- Workspace names

## Project Details

### Project Information
**Prompt:**
```
Tell me about the API Development project
```

**Response includes:**
- Project name
- Client name
- Billable status
- Active/archived status
- Available tasks

---

### Project Tasks Overview
**Prompt:**
```
What tasks are set up for the Frontend project?
```

**Response includes:**
- All task names
- Task IDs
- Task count
- Project context

---

### Billable Projects
**Prompt:**
```
Which of my projects are billable?
```

**What happens:**
- Lists all projects
- Filters by billable status
- Shows billable projects only

## User Pagination

### Large Team Handling
**Prompt:**
```
Show me users in batches of 25
```

**What happens:**
- Returns 25 users per page
- Shows page number
- Can navigate pages

---

### Next Page of Users
**Prompt:**
```
Show me the next 25 users
```

**What happens:**
- Retrieves page 2
- Continues from previous query
- Shows pagination info

---

### Custom Page Size
**Prompt:**
```
List all users, 100 per page
```

**What happens:**
- Uses custom page size
- Returns first 100 users
- Indicates if more pages exist

## Common Workflows

### New Project Setup
**Prompt:**
```
I'm starting work on a new project. Show me:
1. All available projects
2. Current workspace users
3. Available tasks
```

**AI will:**
- List all projects
- Show team members
- Display tasks per project
- Help you get oriented

---

### Team Onboarding
**Prompt:**
```
A new team member joined. Show them:
- Our workspace structure
- Active projects
- Team members
```

**AI provides:**
- Workspace overview
- Project list
- User directory
- Getting started info

---

### Project Handoff
**Prompt:**
```
I'm taking over the Mobile App project. What do I need to know?
```

**AI shows:**
- Project details
- Current team members
- Available tasks
- Recent activity

## Tips for Workspace Management

✅ **Be specific about workspace**
```
Show projects in the "Engineering" workspace
```

✅ **Use pagination for large lists**
```
Show me 50 users per page
```

✅ **Search by name for quick access**
```
Find the "API" project
```

✅ **Combine queries for context**
```
Show me projects and their assigned users
```

❌ **Avoid ambiguous requests**
```
Show me stuff
```

## Common Scenarios

### Daily Standup Prep
```
Show me:
1. My current workspace
2. Projects I'm assigned to
3. Today's time entries
```

### Project Planning
```
List all active projects, their teams, and current assignments for this month
```

### Team Directory
```
Show me all active users in the workspace with their email addresses
```

### Resource Discovery
```
What projects and tasks are available for me to log time to?
```

### Workspace Audit
```
Give me a complete overview: workspaces, projects, users, and my recent activity
```

## Integration Notes

- Workspace ID is required for most operations
- Project IDs are needed for task queries
- User IDs are used for capacity and assignment queries
- Pagination defaults: 50 users per page
- All IDs are preserved for subsequent operations
