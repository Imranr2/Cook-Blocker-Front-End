import axios from "axios";

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export default authAxios;
