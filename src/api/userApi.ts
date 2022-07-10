import { baseUrl } from "@/baseUrl";
import axios from "axios";

export const userApi = axios.create({
  baseURL:baseUrl+'/user',
  withCredentials:true,
})