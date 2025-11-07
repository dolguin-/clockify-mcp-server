import { AxiosInstance } from "axios";
import { api } from "../config/api";

function UsersService(api: AxiosInstance) {
  async function getCurrent() {
    return api.get("user");
  }

  async function fetchByWorkspace(workspaceId: string, page?: number, pageSize?: number) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (pageSize) params.append('page-size', pageSize.toString());

    const queryString = params.toString();
    const url = `workspaces/${workspaceId}/users${queryString ? `?${queryString}` : ''}`;
    return api.get(url);
  }

  return { getCurrent, fetchByWorkspace };
}

export const usersService = UsersService(api);
