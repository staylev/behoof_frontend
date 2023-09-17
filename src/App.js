import Header from "./components/Header";

import Footer from "./components/Footer";

import React, {useContext, useEffect} from "react";
import MainPage from "./Pages/MainPage";
import UserProfile from "./Pages/UserProfile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {getTokenCheck, postLoginData, postRefreshToken, postRegisterData} from "./http/UserAPI";
import {Context} from "./index";
import {FOOD_PAGE, MAIN_PAGE, MENU_PAGE, PROFILE_PAGE, SALES_PAGES} from "./utils/consts";
import MenuPage from "./Pages/MenuPage";
import FoodPage from "./Pages/FoodPage";
import SalesPage from "./Pages/SalesPage";


function App() {
    const {user} = useContext(Context);
    async function checkToken() {
        const response = await getTokenCheck();
        if (response.status === 401) {
            const response_ref = await postRefreshToken(user.getRefreshToken());
            if (response_ref.status === 200) {
                user.setAccessToken(response_ref.data.access);
            }
        }
        if (response.status === 200){
            user.setIsAuth(true);
        }
    }
    useEffect(() => {
        checkToken().then(() => {});
    });
    return (

        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path={MAIN_PAGE} element={<MainPage/>}/>
                    <Route path={PROFILE_PAGE} element={<UserProfile/>}/>
                    <Route path={MENU_PAGE} element={<MenuPage/>}/>
                    <Route path={FOOD_PAGE} element={<FoodPage/>}/>
                    <Route path={SALES_PAGES} element={<SalesPage/>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
