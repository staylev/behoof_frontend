import {authHost, publicHost} from "./InitAxios";

export const postLoginData = async (data) => {
    const url = "users/signin/";

    return await publicHost.post(url, data)
        .catch(error => error.response);
}
export const postRegisterData = async (data) => {
    const url = "users/signup/";

    return await publicHost.post(url, data)
        .catch(error => error.response);
}
export const getTokenCheck = async (data) => {
    const url = "users/token/check/";

    return await authHost.get(url, data)
        .catch(error => error.response);
}
export const postRefreshToken = async (data) => {
    const url = "users/token/refresh/";

    return await publicHost.post(url, data)
        .catch(error => error.response);
}
export const postRemoveRefreshToken = async (data) => {
    const url = "users/token/destroy/";

    return await publicHost.post(url, data)
        .catch(error => error.response);
}