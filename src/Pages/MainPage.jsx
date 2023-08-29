import React from 'react';
import Header from "../compnents/Header";
import TabMenu from "../compnents/TabMenu";
import SaleBlock from "../compnents/SaleBlock";
import Abouts from "../compnents/abouts";
import СоntactBlock from "../compnents/СоntactBlock";
import Footer from "../compnents/Footer";
import MainSlider from "../compnents/MainSlider";
import {useQuery} from "@apollo/client";
import {getAllCategory} from "../graphql/CategoryQuery";
import Popular from "../compnents/Popular";
import {getFood, getfood} from "../graphql/Fod";
import PagePreload from "../compnents/PagePreload";
import ErrorsPage from "../compnents/ErrorsPage";

const MainPage = () => {
    const { loading, error, data } = useQuery(getFood);

    if (loading) return <PagePreload>   </PagePreload>
    if (error) return <ErrorsPage></ErrorsPage>;

    return (
        <div >
            <MainSlider/>
            <Popular data ={data?.allFoods.edges}></Popular>
            <SaleBlock/>
            <Abouts/>
            <div className="main_map">
                <СоntactBlock/>
            </div>

        </div>
    );
};

export default MainPage;