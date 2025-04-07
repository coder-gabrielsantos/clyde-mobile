import api from "./api";
import endpoints from "../constants/endpoints";

export const login = async (payload) => {
    const response = await api.post(endpoints.auth.login, payload);
    return response.data;
};

export const register = async (payload) => {
    const response = await api.post(endpoints.auth.register, payload);
    return response.data;
};
