import { useAuthStore } from "@/store";
import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:4000/api/`,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  // config.headers = {
  //   Authorization: `Bearer ${token}`,
  // };
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
