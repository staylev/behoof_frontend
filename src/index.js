import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import './styles/responsive.css'
import App from './App';
import BasketStore from "./store/BasketStore";
import UserStore from "./store/UserStore.";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {cacheGraphQL} from "./graphql/Cache";

export const Context = createContext(null);

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
    cache: cacheGraphQL,
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
            </ApolloProvider>
        </Context.Provider>
    </React.StrictMode>
);

 

