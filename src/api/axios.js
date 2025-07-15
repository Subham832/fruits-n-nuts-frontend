import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://b0a0bc64fa51.ngrok-free.app/api', // ✅ Use your live ngrok URL
});

export default instance;
