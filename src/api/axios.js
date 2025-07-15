import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bc0cf476707d.ngrok-free.app/api', // ✅ Use your live ngrok URL
});

export default instance;
