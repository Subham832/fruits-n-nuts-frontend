import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://96fba4ed85dc.ngrok-free.app/api', // ✅ Use your live ngrok URL
});

export default instance;
