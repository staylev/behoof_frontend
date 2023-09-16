import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor(props) {
        const localStoreBasket = localStorage.getItem('basket');

        if (!localStoreBasket) {
            this._basket = {};
        } else {
            this._basket = JSON.parse(atob(localStoreBasket));
        }

        makeAutoObservable(this);
    }

    saveInLocalStore() {
        localStorage.setItem('basket', btoa(JSON.stringify(this._basket)))
    }

    addOrUpdateItem(itemId) {
        if (!this._basket.hasOwnProperty(itemId)) {
            this._basket[itemId] = 1;
        } else {
            this._basket[itemId] += 1;
        }

        this.saveInLocalStore();
    }

    removeItem(itemId) {
        if (this._basket.hasOwnProperty(itemId)) {
            this._basket[itemId] -= 1;
        }

        if (this._basket[itemId] === 0) {
            delete this._basket[itemId];
        }

        this.saveInLocalStore();
    }

    getCountByItem(itemId) {
        if (this._basket.hasOwnProperty(itemId)) {
            return this._basket[itemId]
        }

        return 0;
    }

    get countSum() {
        return Object.values(this._basket).reduce((sum, item) => sum + item, 0);
    }
}