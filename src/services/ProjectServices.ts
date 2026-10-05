import { GET } from "../hooks/useFetch";
import type { PaginatedResponse } from "../hooks/useGetData";
import type { IProject } from "../model/interfaces/IProject";

export const getProjects = async (limit = 30) => {
    const { docs, ...rest } = await GET<PaginatedResponse<IProject>>(`api/projects?limit=${limit}`)
    const response: IProject[] = docs
    return { response, meta: { ...rest } }
}

