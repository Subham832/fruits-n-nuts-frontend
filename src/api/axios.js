import axios from "axios";

const instance = axios.create({
  baseURL: "https://2ea9d8d0982c.ngrok-free.app/api", // ✅ Use your live ngrok API base
  headers: {
    "ngrok-skip-browser-warning": "true" // ✅ Skip ngrok browser warning
  }
});

export default instance;
