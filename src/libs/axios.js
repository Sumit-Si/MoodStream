import axios from "axios";

const encodedParams = new URLSearchParams();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_RAPIDAPI_BASE_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: encodedParams,
});

export default axiosInstance;