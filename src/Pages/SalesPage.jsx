import React from 'react';
import {getAllPromotions} from "../graphql/PromotionQuery";
import {gql, useQuery} from "@apollo/client";
import PagePreload from "../components/PagePreload";
import SaleItem from "../components/SaleItem";

const SalesPage = () => {
    const queryAllPromotions = getAllPromotions();

    const query = gql`
        query MainPageQuery (
            $firstAllPromotions: Int,
        ) {
            ${queryAllPromotions}
        }
    `;

    const {loading, error, data} = useQuery(query, {
        variables: {
            firstAllPromotions: 5,
        },
    });

    if (loading || error) {
        return <PagePreload/>;
    }

    return (
        <div>
            <div className='container'>
                <div className="category_title mt-5  ">
                    <div className="line2"></div>
                    <p className="text_title_category">АКЦИИ</p>
                </div>
                <div className='sales mt-3'>
                    {
                        data.map(({node: item}) =>
                            <SaleItem data={item}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SalesPage;