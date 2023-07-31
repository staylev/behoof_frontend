import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import indeika from '../image/menu 1.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={indeika}/>
                <Card.Body>
                    <div className="title_card">
                        <Card.Title className="product_name">Ягненок</Card.Title>
                        <p className="massa">Вес: 225 г</p>
                    </div>
                    <Card.Text className="product_description">
                        Фаршированный гречневой кашей, курагой, апельсином и зеленым
                        яблоком
                    </Card.Text>
                    <div className='footer_cart mt-3'>
                        <p className="price">620 ₽</p>
                        <Button className="but_cart">
                            В корзину
                            <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}}/>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;