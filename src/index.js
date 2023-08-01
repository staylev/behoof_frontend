import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            basket: new BasketStore(),

        }}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);

 

