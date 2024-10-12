import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:3030',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add a request interceptor to include the Bearer token if available
axiosClient.interceptors.request.use(
    (config) => {
        // Retrieve the token (assuming it's stored in localStorage or a cookie)
        const token = localStorage.getItem('token'); // Or use Vuex/Pinia store, or cookies, etc.

        if (token) {
            // If token exists, add it to the Authorization header
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Handle the error before the request is sent
        return Promise.reject(error);
    }
);

// Provide the axiosClient instance to the Nuxt app
export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: axiosClient,
        },
    }
});
