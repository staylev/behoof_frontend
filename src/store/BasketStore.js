import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor(props) {
        this._basket = 0;
        makeAutoObservable(this);
    }

    SetBasket(countBasket) {
        this._basket = countBasket;
    }

    get GetBasket() {
        return this._basket;
    }
}