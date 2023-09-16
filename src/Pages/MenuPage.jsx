import React from 'react';
import TabMenu from "../components/TabMenu";
import {useQuery} from "@apollo/client";
import {getAllFoods} from "../graphql/FoodQuery";
import PagePreload from "../components/PagePreload";
import ErrorsPage from "../components/ErrorsPage";
import {getAllCategories} from "../graphql/CategoryQuery";
import ContactBlock from "../components/ContactBlock";

const MenuPage = () => {
    return (
        <div>
            {/*<TabMenu data = {data?.allCategories.edges}/>*/}
            <ContactBlock/>
        </div>
    );
};

export default MenuPage;