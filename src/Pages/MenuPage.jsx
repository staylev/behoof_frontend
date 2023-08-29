import React from 'react';
import TabMenu from "../compnents/TabMenu";
import {useQuery} from "@apollo/client";
import {getFood} from "../graphql/Fod";
import PagePreload from "../compnents/PagePreload";
import ErrorsPage from "../compnents/ErrorsPage";
import {getAllCategory} from "../graphql/CategoryQuery";
import СоntactBlock from "../compnents/СоntactBlock";

const MenuPage = () => {
    const { loading, error, data } = useQuery(getAllCategory);

    if (loading) return <PagePreload>   </PagePreload>
    if (error) return <ErrorsPage></ErrorsPage>;

    return (
        <div>
            <TabMenu data = {data?.allCategories.edges}/>
            <СоntactBlock/>
        </div>
    );
};

export default MenuPage;