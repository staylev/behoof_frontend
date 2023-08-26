import {publicHost} from "./InitAxios";

export const postLoginData = async (data) => {
    const url = "users/signin/";

    return await publicHost.post(url, data)
        .catch(error => error.response);
}