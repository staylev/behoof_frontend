import React, {useState} from 'react';
import {getAllPromotions} from "../graphql/PromotionQuery";
import {gql, useQuery} from "@apollo/client";
import PagePreload from "../components/PagePreload";
import SaleItem from "../components/SaleItem";
import {Col, Row, Spinner} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SALES_PAGES} from "../utils/consts";
import PromotionsGrid from "../components/grids/PromotionsGrid";

const SalesPage = () => {
    const queryAllPromotions = getAllPromotions();

    const query = gql`
        query SalesPageQuery (
            $firstAllPromotions: Int,
            $afterAllPromotions: String,
        ) {
            ${queryAllPromotions}
        }
    `;

    const {loading, error, data, fetchMore} = useQuery(query, {
        variables: {
            firstAllPromotions: 6,
        },
    });

    if (loading || error) {
        return <PagePreload/>;
    }

    return (
        <div className='container mb-5'>
            <div className="category_title my-5">
                <div className="line2"></div>
                <p className="text_title_category">АКЦИИ</p>
            </div>

            <PromotionsGrid
                data={data.allPromotions}
                func={fetchMore}
            />
        </div>
    );
};

export default SalesPage;