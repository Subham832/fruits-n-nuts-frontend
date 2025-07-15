import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://90b7e8bf5705.ngrok-free.app/api', // ✅ Use your live ngrok URL
});

export default instance;
