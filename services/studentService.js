import api from "./api";
import endpoints from "../constants/endpoints";

export const joinClassroom = async (payload) => {
    const response = await api.post(endpoints.student.join, payload);
    return response.data;
};

export const listEnrolledClassrooms = async () => {
    const response = await api.get(endpoints.student.list);
    return response.data;
};
