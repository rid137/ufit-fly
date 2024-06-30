import axios from 'axios';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const API = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(request => {
    return request;
    
    }, error => {
    return Promise.reject(error);
});

API.interceptors.response.use(
    response => response,
);

export default API