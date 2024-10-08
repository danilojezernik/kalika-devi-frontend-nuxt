import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:3030',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: axiosClient,
        },
    }
})
