import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {gql, useQuery} from "@apollo/client";
import {getAllFoods, getFood} from "../graphql/FoodQuery";
import PagePreload from "../components/PagePreload";
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../index";
import LargeFoodCard from "../components/cards/LargeFoodCard";
import FoodList from "../components/lists/FoodList";
import {MENU_PAGE} from "../utils/consts";
import ContactBlock from "../components/ContactBlock";

const FoodPage = () => {
    const {foodId} = useParams();
    const navigate = useNavigate();

    const queryFood = getFood();
    const queryAllFoods = getAllFoods();
    const query = gql`
        query FoodPageQuery (
            $foodId: ID!,
            $firstAllFoods: Int,
        ) {
            ${queryFood}
            ${queryAllFoods}
        }
    `;

    const {loading, error, data} = useQuery(query, {
        variables: {
            foodId: foodId,
            firstAllFoods: 5,
        },
    });

    if (loading || error) {
        return <PagePreload/>;
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="large-card">
                        <NavLink to={MENU_PAGE} className="go-back d-flex flex-row align-items-center my-4">
                            <div
                                className="value_basket d-flex justify-content-center align-items-center"
                                style={{backgroundColor: "#69956f"}}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    style={{color: "white"}}
                                />
                            </div>
                            <p className="ms-2">
                                Вернуться к ассортименту
                            </p>
                        </NavLink>
                        <LargeFoodCard data={data?.food}/>
                    </Col>
                </Row>
            </Container>
            <FoodList data={{
                title: 'С этим товаром покупают',
                edges: data?.allFoods.edges,
            }}/>
            <div style={{height: 400}}>

            </div>

            <ContactBlock/>
        </>
    );
};

export default FoodPage;