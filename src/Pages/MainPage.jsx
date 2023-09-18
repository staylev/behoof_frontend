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
            <SaleBlock data={data.allPromotions.edges}/>
            <Abouts/>
            <ContactBlock data={data.allRestaurants.edges}/>
        </div>
    );
};

export default MainPage;