import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", //URL PARA COMINUCACAO COM O A API
});

export default api;
