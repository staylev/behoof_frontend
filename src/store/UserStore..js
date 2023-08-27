import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(props) {
        this._isAuth = false;
        makeAutoObservable(this);
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
    }
}