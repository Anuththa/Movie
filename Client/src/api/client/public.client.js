import axios from "axios";
import queryString from "query-string";

<<<<<<< HEAD
const baseURL = "https://moonflix-api.vercel.app/api/v1/";
=======
const baseURL = "https://https://moonflix-api.vercel.app/api/v1/";
>>>>>>> a01b2056a416af1e2ebebb31db8460a7e0fdeb5f

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default publicClient;
