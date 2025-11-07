import axios from "axios";

export const api = axios.create({
  baseURL: process.env.CLOCKIFY_API_URL || 'https://api.clockify.me/api/v1',
  headers: {
    "X-Api-Key": `${process.env.CLOCKIFY_API_TOKEN}`,
  },
});

export const SERVER_CONFIG = {
  name: "Clockify MCP Server",
  version: "1.0.0",
  description:
    "A service that integrates with Clockify API to manage time entries",
};

export const TOOLS_CONFIG = {
  workspaces: {
    list: {
      name: "get-workspaces",
      description:
        "Get user available workspaces id and name, a workspace is required to manage time entries",
    },
  },
  projects: {
    list: {
      name: "get-projects",
      description:
        "Get workspace projects id and name, the projects can be associated with time entries",
    },
  },
  tasks: {
    list: {
      name: "get-project-tasks",
      description:
        "Get tasks from a specific project in a workspace",
    },
  },
  users: {
    current: {
      name: "get-current-user",
      description:
        "Get the current user id and name, to search for entries is required to have the user id",
    },
    list: {
      name: "get-workspace-users",
      description:
        "Get all users from a workspace",
    },
  },
  entries: {
    create: {
      name: "create-time-entry",
      description:
        "Register a new time entry of a task or break in a workspace",
    },
    list: {
      name: "list-time-entries",
      description: "Get registered time entries from a workspace",
    },
    delete: {
      name: "delete-time-entry",
      description: "Delete a specific time entry from a workspace",
    },
    edit: {
      name: "edit-time-entry",
      description: "Edit an existing time entry in a workspace",
    },
  },
  reports: {
    detailed: {
      name: "get-detailed-reports",
      description: "Get detailed time entry reports with advanced filtering options including date ranges, projects, users, and more",
    },
  },
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
      description: "Get total capacity and working hours for a specific user within a date range",
    },
  },
};
