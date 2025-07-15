import axios from "axios";

const instance = axios.create({
  baseURL: "https://9812ff438a0d.ngrok-free.app/api", // ✅ Use your live ngrok API base
  headers: {
    "ngrok-skip-browser-warning": "true" // ✅ Skip ngrok browser warning
  }
});

export default instance;
