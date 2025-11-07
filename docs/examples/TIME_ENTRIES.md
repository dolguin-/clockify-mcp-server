# Time Entries Examples

Complete guide for managing time entries through natural language prompts.

## Creating Time Entries

### Basic Time Entry
**Prompt:**
```
Log 2 hours of work on the API Development project starting at 9 AM today
```

**What happens:**
- AI gets your workspace and user info
- Finds the "API Development" project
- Creates entry from 9 AM to 11 AM today
- Marks as billable by default

---

### Time Entry with Description
**Prompt:**
```
I worked on fixing the login bug for 1.5 hours this afternoon. Log it to the Bug Fixes project.
```

**What happens:**
- Creates entry with description "fixing the login bug"
- Associates with "Bug Fixes" project
- Uses afternoon timeframe (AI will ask for specific time if needed)

---

### Non-Billable Time Entry
**Prompt:**
```
Log 30 minutes of internal meeting time, non-billable, from 2 PM to 2:30 PM
```

**What happens:**
- Creates entry marked as non-billable
- Uses exact time range specified

---

### Time Entry with Task
**Prompt:**
```
Add 4 hours to the Database Migration task in the Backend project, from 10 AM to 2 PM yesterday
```

**What happens:**
- AI finds the Backend project
- Lists available tasks in that project
- Associates entry with "Database Migration" task

---

### Break Time Entry
**Prompt:**
```
Log my lunch break from 12 PM to 1 PM today
```

**What happens:**
- Creates entry with "lunch break" description
- Usually marked as non-billable

## Listing Time Entries

### Today's Entries
**Prompt:**
```
Show me all my time entries for today
```

**Response includes:**
- Description of each entry
- Project name
- Time range
- Duration
- Billable status

---

### Entries for Date Range
**Prompt:**
```
List all my time entries from last Monday to Friday
```

**What happens:**
- AI calculates the date range
- Retrieves all entries in that period
- Shows total hours worked

---

### Entries for Specific Project
**Prompt:**
```
Show me all time I logged to the Mobile App project this month
```

**What happens:**
- Filters entries by project
- Shows month-to-date entries
- Calculates total hours on that project

---

### Yesterday's Entries
**Prompt:**
```
What did I work on yesterday?
```

**Response includes:**
- All entries from previous day
- Project breakdown
- Total hours

## Editing Time Entries

### Change Duration
**Prompt:**
```
The last entry I created should be 3 hours instead of 2 hours
```

**What happens:**
- AI lists recent entries
- Updates the most recent one
- Adjusts end time accordingly

---

### Change Description
**Prompt:**
```
Update the description of my 9 AM entry today to "Implemented user authentication"
```

**What happens:**
- Finds entry starting at 9 AM
- Updates description only
- Keeps other fields unchanged

---

### Change Project
**Prompt:**
```
Move my last time entry to the Frontend project instead
```

**What happens:**
- Gets your recent entries
- Updates project association
- Confirms the change

---

### Make Entry Non-Billable
**Prompt:**
```
Change my afternoon meeting entry to non-billable
```

**What happens:**
- Finds the meeting entry
- Updates billable flag to false

## Deleting Time Entries

### Delete Last Entry
**Prompt:**
```
Delete my last time entry
```

**What happens:**
- Lists recent entries
- Deletes the most recent one
- Confirms deletion

---

### Delete Specific Entry
**Prompt:**
```
Remove the time entry I created at 2 PM today
```

**What happens:**
- Finds entry starting at 2 PM
- Deletes it
- Confirms removal

---

### Delete Entry by Description
**Prompt:**
```
Delete the entry about the bug fix I logged earlier
```

**What happens:**
- Searches entries by description
- Shows matching entries
- Deletes after confirmation

## Advanced Use Cases

### Bulk Time Entry
**Prompt:**
```
I worked on three different tasks today:
- Code review: 1 hour from 9-10 AM
- Development: 4 hours from 10 AM-2 PM
- Testing: 2 hours from 3-5 PM
Log all of these to the Web App project
```

**What happens:**
- AI creates three separate entries
- All associated with same project
- Each with appropriate description

---

### Retroactive Time Logging
**Prompt:**
```
I forgot to log my time last week. I worked:
- Monday: 8 hours on Backend
- Tuesday: 6 hours on Frontend
- Wednesday: 7 hours on Backend
Can you add these?
```

**What happens:**
- Creates entries for each day
- Uses standard work hours (9 AM - 5 PM)
- Associates with correct projects

---

### Copy Previous Entry
**Prompt:**
```
Create the same time entry as yesterday but for today
```

**What happens:**
- Gets yesterday's entry details
- Creates new entry with same description/project
- Uses today's date with same time range

## Common Patterns

### Daily Standup Logging
```
Log 15 minutes for daily standup at 9 AM, non-billable
```

### End of Day Summary
```
Show me my total hours for today and what projects I worked on
```

### Weekly Review
```
Give me a breakdown of my time entries for this week by project
```

### Quick Time Entry
```
Start timer for API Development project
(Note: This creates an entry starting now, you can stop it later)
```

## Tips

✅ **Use relative dates**
- "today", "yesterday", "last Monday", "this week"

✅ **Be specific about times**
- "from 9 AM to 11 AM" is better than "in the morning"

✅ **Mention project names clearly**
- Use exact project names from your workspace

✅ **Include descriptions**
- Helps with later reporting and analysis

❌ **Avoid overlapping entries**
- Clockify doesn't allow time overlap
- Edit or delete existing entries first
