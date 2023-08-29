import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/responsive.css'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import BasketStore from "./store/BasketStore";
import UserStore from "./store/UserStore.";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export const Context = createContext(null);

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            basket: new BasketStore(),
            user: new UserStore(),
        }}>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>,
        </Context.Provider>
    </React.StrictMode>
);

 

