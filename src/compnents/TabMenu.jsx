import React, {useEffect, useRef} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "react-bootstrap/Card";
import Cart from "./Cart";


const TabMenu = (props) => {
    const data = props.data;
    return (
        <div className="container mb-5">
            <div className=" ">
                <Tabs
                    defaultActiveKey="-zac"
                    id="justify-tab-example"
                    className="mb-5 tabs_custom"
                >
                    {
                        data.map(({node: item}) => {
                            return (
                                <Tab eventKey={item.id} key={item.id} title={item.title}>
                                    <div className="category_title mt-5">
                                        <div className="line2"></div>
                                        <p className="text_title_category">{item.title}</p>
                                    </div>
                                    <div className="cards mt-4" >
                                    </div>
                                </Tab>
                            )
                        })
                    }

                </Tabs>
                <div className="line3 mt-5"></div>
            </div>
        </div>
    );
};

export default TabMenu;