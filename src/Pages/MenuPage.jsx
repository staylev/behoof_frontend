import React from 'react';
import TabMenu from "../components/TabMenu";
import {gql, useQuery} from "@apollo/client";
import {getAllFoods} from "../graphql/FoodQuery";
import PagePreload from "../components/PagePreload";
import ErrorsPage from "../components/ErrorsPage";
import {getAllCategories} from "../graphql/CategoryQuery";
import ContactBlock from "../components/ContactBlock";
import {getAllRestaurants} from "../graphql/RestaurantQuery";

const MenuPage = (props) => {
    const queryCategory = getAllCategories()
    const queryAllFoods = getAllFoods();
    const queryAllRestaurants = getAllRestaurants();
    const query = gql`
         query MenuPageQuery (
            $firstAllFoods: Int,
        )  { 
            ${queryAllRestaurants}
            ${queryCategory} 
            ${queryAllFoods}
        }
    `;
    const {loading, error, data, fetchMore, refetch} = useQuery(query, {
        variables: {
            firstAllFoods: 5,
        },
    });

    if (loading || error) {
        return <PagePreload/>;
    }
    return (
        <div>
            <TabMenu data={{
                category: data?.allCategories.edges,
                food:data?.allFoods.edges,
            }} func={refetch()}></TabMenu>
                <ContactBlock data={data.allRestaurants.edges}/>
        </div>
    );
};

export default MenuPage;