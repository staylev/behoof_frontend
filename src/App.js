import Header from "./compnents/Header";
import MainSlider from "./compnents/MainSlider";
import Footer from "./compnents/Footer";
import TabMenu from "./compnents/TabMenu";
import SaleBlock from "./compnents/SaleBlock";
import Abouts from "./compnents/abouts";
import СоntactBlock from "./compnents/СоntactBlock";
import {YMaps,Map } from "@pbe/react-yandex-maps";
import React from "react";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainSlider/>
            <TabMenu/>
            <SaleBlock/>
            <Abouts/>
            <СоntactBlock/>
            <Footer/>

    </div>
  );
}

export default App;
