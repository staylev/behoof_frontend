import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {getAllFoods} from "../graphql/FoodQuery";
import {getAllPromotions} from "../graphql/PromotionQuery";
import {getAllRestaurants} from "../graphql/RestaurantQuery";
import {gql, useQuery} from "@apollo/client";


const TabMenu = (props) => {
    const {
        data,
        func:refetch,
    } = props;
    console.log(data);
    return (
        <div className="container mb-5">
            <div className=" ">
                <Tabs
                    defaultActiveKey="1"
                    id="justify-tab-example"
                    className="mb-5 tabs_custom"
                >
                    <Tab eventKey={1} key={1}
                         title="Все">
                        <div className="category_title mt-5">
                            <div className="line2"></div>
                            <p className="text_title_category">Все</p>
                        </div>
                        <div className="cards mt-4">
                        </div>
                    </Tab>
                    {
                        data.category.map(({node: item}) =>
                            <Tab eventKey={item.id} key={item.id}
                                 title={item.title}>
                                <div className="category_title mt-5">
                                    <div className="line2"></div>
                                    <p className="text_title_category">{item.title}</p>
                                </div>

                            </Tab>
                        )
                    }
                </Tabs>
                <div className="line3 mt-5"></div>
            </div>
        </div>
    );
};

export default TabMenu;