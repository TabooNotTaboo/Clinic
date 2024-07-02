import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://api-dev.ezcount.vn/api/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});
