import { environment } from "environments/environment"


export const GetDomain = (indexKey) => {
    return environment[indexKey] || "";
}
