import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Context} from "../../index";
import {NavLink} from "react-router-dom";
import {MENU_PAGE} from "../../utils/consts";


const SmallFoodCard = (props) => {
    const {
        id,
        price,
        title,
        weight,
        preview,
        previewDescription,
    } = props.data;

    const {basket} = useContext(Context);

    const [countInBasket, setCountInBasket] = useState(basket.getCountByItem(id));

    const removeFromBasket = () => {
        basket.removeItem(id);
        setCountInBasket(basket.getCountByItem(id));
    }
    const addInBasket = () => {
        basket.addOrUpdateItem(id);
        setCountInBasket(basket.getCountByItem(id));
    }

    return (
        <div
            className="col-9 col-sm-7 col-md-6 col-lg-4 col-xl-3 m-3 small-card">
            <Card className="card position-relative">
                <Card.Img variant="top" className="image_product"
                          src={preview}/>
                <Card.Body
                    className="d-flex flex-column justify-content-between">
                    <div>
                        <div className="title_card align-items-start">
                            <NavLink to={MENU_PAGE + id + '/'}>
                                <Card.Title className="product_name">
                                    {title}
                                </Card.Title>
                            </NavLink>
                            <p className="massa my-2">
                                Вес: {weight} г.
                            </p>
                        </div>
                        <Card.Text className="product_description">
                            {previewDescription}
                        </Card.Text>
                    </div>
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
                </Card.Body>
                {
                    countInBasket !== 0 &&
                    <div className='count_in_basket'>
                        {countInBasket}
                    </div>
                }
            </Card>
        </div>
    );
};

export default SmallFoodCard;