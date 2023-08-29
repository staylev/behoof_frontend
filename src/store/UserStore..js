import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(props) {
        this._isAuth = false;
        makeAutoObservable(this);
    }
    setIsAuth(isAuth) {
      this._isAuth = isAuth;
    }
    get isAuth() {
        return this._isAuth;
    }

    setAccessToken(accessToken) {
        this._isAuth = true;
        localStorage.setItem("access", accessToken);
    }

    removeAccessToken() {
        this._isAuth = false;
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    }
    getRefreshToken() {
        return {
            refresh:localStorage.getItem("refresh")
        };
    }
    setRefreshToken(refreshToken) {
        localStorage.setItem("refresh", refreshToken);
    }
}