import api from "../../../shared/api";
import endpoints from "../../../shared/constants/endpoints";

export const login = async (payload) => {
    const response = await api.post(endpoints.authentication.login, payload);
    return response.data;
};

export const register = async (payload) => {
    const response = await api.post(endpoints.authentication.register, payload);
    return response.data;
};
