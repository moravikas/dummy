import axios from "axios";

const API = axios.create({
  baseURL: "https://dummy-npnk.onrender.com/api/products",
});

export default API;