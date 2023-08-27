import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import UserProfile from "./UserProfile";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/profile/" element={<UserProfile/>}/>
        </Routes>
    );
};

export default MainRoutes;