import Header from "./compnents/Header";

import Footer from "./compnents/Footer";

import React from "react";
import MainPage from "./Pages/MainPage";
import UserProfile from "./Pages/UserProfile";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                     <Route path="/" element={<MainPage/>}/>
                    <Route path="/profile/" element={<UserProfile/>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
