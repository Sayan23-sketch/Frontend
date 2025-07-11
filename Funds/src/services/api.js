import axios from "axios";

// Set your backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api", // change this when deployed
});

// Automatically attach JWT token if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
