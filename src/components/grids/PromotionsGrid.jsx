import React, {useState} from 'react';
import {Col, Row, Spinner} from "react-bootstrap";
import SaleItem from "../SaleItem";

const PromotionsGrid = (props) => {
    const {
        data: {
            edges: data,
            pageInfo,
        },
        func: fetchMore,
    } = props;
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreData = () => {
        setIsLoading(true);

        fetchMore({
            variables: {
                firstAllPromotions: 6,
                afterAllPromotions: pageInfo.endCursor,
            },
        });

        setIsLoading(false);
    };

    return (
        <Row>
            {
                data.map(({node: item}) =>
                    <Col className=" col-12 col-sm-6 col-xl-4 mb-4">
                        <SaleItem data={item}/>
                    </Col>
                )
            }
            {
                isLoading ?
                    <Spinner
                        animation="border"
                        className='m-auto preload page'
                    /> :
                    <>
                        {
                            pageInfo.hasNextPage &&
                            <button className="w-100 mt-4 all_menu"
                                    onClick={loadMoreData}>
                                Загрузить еще
                            </button>
                        }
                    </>
            }
        </Row>
    );
};

export default PromotionsGrid;