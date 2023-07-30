import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    );
};

export default MainRoutes;