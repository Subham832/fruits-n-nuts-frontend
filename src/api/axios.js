import axios from "axios";

const instance = axios.create({
  baseURL: "https://61b7d3310fad.ngrok-free.app/api", // ✅ update this when ngrok changes
  headers: {
    "ngrok-skip-browser-warning": "true"
  }
});

// ✅ Add a request interceptor to automatically include token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
