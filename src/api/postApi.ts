import { baseUrl } from "@/baseUrl";
import axios from "axios";
import { start, done } from "nprogress";
export const postApi = axios.create({
  baseURL: baseUrl + "/blog",
  withCredentials: true,
});

postApi.interceptors.request.use(
  (config) => {
    start()
    return config
  },
  (error) => {
    done()
    return Promise.reject(error)
  }
);

postApi.interceptors.response.use(
  (config) => {
    done()
    return config
  }
);
