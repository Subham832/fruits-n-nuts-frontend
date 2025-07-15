import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://9111ba205a0c.ngrok-free.app/api', // ✅ Use your live ngrok URL
});

export default instance;
