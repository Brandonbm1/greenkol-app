import { GET } from "../hooks/useFetch";
import type { IProject } from "../model/interfaces/IProject";

export const getProjectsHomeScreen = async () => {
    const {docs, ...rest} = await GET(`api/projects/important`)
    // console.log({docs})
    const response: IProject[] = docs
    // console.log({response})
    return {response, meta: { ...rest }}
}