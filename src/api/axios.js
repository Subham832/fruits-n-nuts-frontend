import axios from "axios";

const instance = axios.create({
  baseURL: "https://1bc0806d5410.ngrok-free.app/api", // ✅ Use your live ngrok API base
  headers: {
    "ngrok-skip-browser-warning": "true" // ✅ Skip ngrok browser warning
  }
});

export default instance;
