import React from 'react';
import SaleBlock from "../components/SaleBlock";
import Abouts from "../components/abouts";
import ContactBlock from "../components/ContactBlock";
import MainSlider from "../components/MainSlider";
import {gql, useQuery} from "@apollo/client";
import FoodList from "../components/lists/FoodList";
import {getAllFoods} from "../graphql/FoodQuery";
import PagePreload from "../components/PagePreload";
import {getAllPromotions} from "../graphql/PromotionQuery";
import {getAllRestaurants} from "../graphql/RestaurantQuery";
import {NavLink} from "react-router-dom";
import {MENU_PAGE, SALES_PAGES} from "../utils/consts";


const MainPage = (props) => {
    const queryAllFoods = getAllFoods();
    const queryAllPromotions = getAllPromotions();
    const queryAllRestaurants = getAllRestaurants();

    const query = gql`
        query MainPageQuery (
            $firstAllFoods: Int,
            $firstAllPromotions: Int,
            $afterAllPromotions: String,
        ) {
            ${queryAllFoods}
            ${queryAllPromotions}
            ${queryAllRestaurants}
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
                edges: data.allFoods.edges,
            }}/>
            <div className="container">
                <button className="w-100 mt-4 all_menu">
                    <NavLink to={MENU_PAGE}>Посмотреть все позиции </NavLink>
                </button>
            </div>

            <SaleBlock data={data.allPromotions.edges}/>
            <div className="container">
                <button className="w-100 mt-4 all_menu">
                    <NavLink to={SALES_PAGES}>Все акции </NavLink>
                </button>
            </div>
            <Abouts/>
            <ContactBlock data={data.allRestaurants.edges}/>
        </div>
    );
};

export default MainPage;