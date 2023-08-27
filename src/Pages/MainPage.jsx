import React from 'react';
import Header from "../compnents/Header";
import TabMenu from "../compnents/TabMenu";
import SaleBlock from "../compnents/SaleBlock";
import Abouts from "../compnents/abouts";
import СоntactBlock from "../compnents/СоntactBlock";
import Footer from "../compnents/Footer";
import MainSlider from "../compnents/MainSlider";

const MainPage = () => {

    return (
        <div >
            <MainSlider/>
            <TabMenu/>
            <SaleBlock/>
            <Abouts/>
            <СоntactBlock/>
        </div>
    );
};

export default MainPage;