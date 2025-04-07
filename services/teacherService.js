import api from "./api";
import endpoints from "../constants/endpoints";

export const createClassroom = async (payload) => {
    const response = await api.post(endpoints.teacher.new, payload);
    return response.data;
};

export const listOwnClassrooms = async () => {
    const response = await api.get(endpoints.teacher.own);
    return response.data;
};
