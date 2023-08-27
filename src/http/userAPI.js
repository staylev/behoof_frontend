import {publicHost} from "./InitAxios";

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