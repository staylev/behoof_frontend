import axios from "axios";

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    timeout: 10000,
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    timeout: 10000,
})

authHost.interceptors.request.use(
    async config => {
        const token = localStorage.getItem("access");

        if (token !== null) {
            config.headers["Authorization"] = "Bearer " + token;
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

export {publicHost, authHost};