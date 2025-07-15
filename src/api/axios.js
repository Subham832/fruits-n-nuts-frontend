import axios from "axios";

const instance = axios.create({
  baseURL: "https://f892fdb4f6c8.ngrok-free.app/api", // ✅ Use your live ngrok API base
  headers: {
    "ngrok-skip-browser-warning": "true" // ✅ Skip ngrok browser warning
  }
});

export default instance;
