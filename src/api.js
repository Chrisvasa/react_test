import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7174',
});

export default api;