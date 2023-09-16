import React, {useContext, useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Context} from "../../index";
import Button from "react-bootstrap/Button";

const LargeFoodCard = (props) => {
    const {
        data: {
            id,
            title,
            preview,
            composition,
            description,
            price,
            proteins,
            carbohydrates,
            fats,
            kilocalories,
            weight,
        },
    } = props;

    const {basket} = useContext(Context);
    const [countInBasket, setCountInBasket] = useState(0);

    useEffect(() => {
        setCountInBasket(basket.getCountByItem(id));
    })

    const removeFromBasket = () => {
        basket.removeItem(id);
        setCountInBasket(basket.getCountByItem(id));
    }
    const addInBasket = () => {
        basket.addOrUpdateItem(id);
        setCountInBasket(basket.getCountByItem(id));
    }

    return (
        <Card>
            <Row>
                <Col className="col-12 col-lg-6">
                    <Card.Img variant="top" className="image_product"
                              style={{height: "100%"}}
                              src={preview}/>
                </Col>
                <Col className="col-12 col-lg-6">
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text>
                            <p className="product_description my-2">
                                <b style={{color: "white"}}>
                                    Состав:
                                </b> {composition}
                            </p>
                            <p className="product_description my-3">
                                {description}
                            </p>
                            <p className="massa my-4"
                               style={{textAlign: "left"}}>
                                Вес: {weight} г.
                            </p>
                            <Table className="food-table">
                                <tbody>
                                <tr>
                                    <td>Белки</td>
                                    <td>Жиры</td>
                                    <td>Углеводы</td>
                                    <td>Ккал</td>
                                </tr>
                                <tr>
                                    <td>{proteins}</td>
                                    <td>{fats}</td>
                                    <td>{carbohydrates}</td>
                                    <td>{kilocalories}</td>
                                </tr>
                                </tbody>
                            </Table>

                        </Card.Text>
                        <Col className="col-6 col-lg-8 col-xl-6 m-auto">
                            {
                                countInBasket === 0 ?
                                    <div className="footer_cart mt-3">
                                        <p className="price">{price} ₽</p>
                                        <Button
                                            className="but_cart"
                                            onClick={addInBasket}
                                        >
                                            В корзину
                                        </Button>
                                    </div> :
                                    <div className='select_count_product mt-3'>
                                        <button
                                            className='minus'
                                            onClick={removeFromBasket}
                                        >
                                            -
                                        </button>
                                        <p className="price">
                                            {price * countInBasket} ₽
                                        </p>
                                        <button
                                            className='plus'
                                            onClick={addInBasket}
                                        >
                                            +
                                        </button>
                                    </div>
                            }
                        </Col>
                    </Card.Body>
                    {
                        countInBasket !== 0 &&
                        <div className='count_in_basket'>
                            {countInBasket}
                        </div>
                    }
                </Col>
            </Row>
        </Card>
    );
};

export default LargeFoodCard;