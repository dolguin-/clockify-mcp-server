import { AxiosInstance } from "axios";
import { api } from "../config/api";

function UsersService(api: AxiosInstance) {
  async function getCurrent() {
    return api.get("user");
  }

  async function fetchByWorkspace(workspaceId: string) {
    return api.get(`workspaces/${workspaceId}/users`);
  }

  return { getCurrent, fetchByWorkspace };
}

export const usersService = UsersService(api);
