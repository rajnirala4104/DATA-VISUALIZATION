import { ENDPOINTS } from "../constants"
import { http } from "../http"

export const getAllTheData = () => {
   return http.get(`${ENDPOINTS.allData}`);
}

export const distinctValue = (key: string) => {
   return http.get(`${ENDPOINTS.distinctKey}/${key}`);
}

export const searchData = (queries: { queryKey: string, queryValue: string }) => {
   console.log(queries.queryKey, queries.queryValue)
   return http.get(`${ENDPOINTS.search}?${queries.queryKey}=${queries.queryValue}`);
}

