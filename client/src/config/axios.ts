import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "http://localhost:7000",
});
