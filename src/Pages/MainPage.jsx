import React from 'react';
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import SaleBlock from "../components/SaleBlock";
import Abouts from "../components/abouts";
import ContactBlock from "../components/ContactBlock";
import MainSlider from "../components/MainSlider";
import {gql, useQuery} from "@apollo/client";
import FoodList from "../components/lists/FoodList";
import {getAllFoods} from "../graphql/FoodQuery";
import PagePreload from "../components/PagePreload";
import ErrorsPage from "../components/ErrorsPage";
import {getAllPromotions} from "../graphql/PromotionQuery";
import {NavLink} from "react-router-dom";
import {MENU_PAGE} from "../utils/consts";
import {Container} from "react-bootstrap";

const MainPage = (props) => {
    const queryAllFoods = getAllFoods();
    const queryAllPromotions = getAllPromotions();

    const query = gql`
        query MainPageQuery (
            $firstAllFoods: Int,
            $firstAllPromotions: Int,
        ) {
            ${queryAllFoods}
            ${queryAllPromotions}
        }
    `;

    const {loading, error, data} = useQuery(query, {
        variables: {
            firstAllFoods: 5,
            firstAllPromotions: 5,
        },
    });

    if (loading || error) {
        return <PagePreload/>;
    }

    return (
        <div>
            <MainSlider/>

            <FoodList data={{
                title: 'Популярное',
                edges: data?.allFoods.edges,
            }}/>


            <SaleBlock data={data?.allPromotions.edges}/>
            <Abouts/>

            <div className="main_map">
                <ContactBlock/>
            </div>
        </div>
    );
};

export default MainPage;