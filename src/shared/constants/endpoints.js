const API_ENDPOINTS = {
    authentication: {
        login: "/authentication/login",
        register: "/authentication/register",
    },
    student: {
        join: "/student/classrooms/join",
        list: "/student/classrooms/list",
    },
    teacher: {
        new: "/teacher/classrooms/new",
        own: "/teacher/classrooms/own",
    },
};

export default API_ENDPOINTS;
