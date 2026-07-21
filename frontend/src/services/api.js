import axios from "axios";

const api = axios.create({
  baseURL: "https://bb-landscaping.onrender.com/api",
});

export default api;