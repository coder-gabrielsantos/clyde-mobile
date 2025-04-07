import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.5.68:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
