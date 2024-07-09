import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
  },
});

export default AxiosInstance;