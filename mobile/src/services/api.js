import axios from "axios";

const api = axios.create({
  baseURL: "http://169.57.223.40:31114"
});

export default api;
