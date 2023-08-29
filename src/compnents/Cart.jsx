import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import indeika from '../image/menu 1.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../index";


const Cart =  (props) => {
    const data = props.data;
    const [countInBasket, setCountInBasket] = useState(0);
    var price = data.price;

    const {basket} = useContext(Context);



    return (
        <div className=" col-9 col-sm-7 col-md-6 col-lg-4 col-xl-3 m-3">
            <Card className="card position-relative">
                <Card.Img variant="top" className="image_product" src={data.preview}/>
                <Card.Body >
                    <div className="title_card">
                        <Card.Title className="product_name">{data.title}</Card.Title>
                        <p className="massa">Вес: {data.weight}</p>
                    </div>
                    <Card.Text className="product_description">

                    </Card.Text>
                    {
                        countInBasket === 0 ?
                            <div className="footer_cart mt-3">
                                <p className="price">{price} ₽</p>
                                <Button className="but_cart" onClick={()=> {
                                    setCountInBasket(countInBasket + 1);
                                    basket.SetBasket(basket.GetBasket  +1) ;
                                }}>
                                    В корзину

                                </Button>
                            </div> :
                            <div className='select_count_product mt-3'>
                                <button className='minus' onClick={()=>{
                                    setCountInBasket(countInBasket-1);
                                    basket.SetBasket(basket.GetBasket  - 1) ;
                                }}>-</button>
                                <p className="price">{price*countInBasket} ₽</p>
                                <button className='plus' onClick={()=>{
                                    setCountInBasket(countInBasket+1);
                                    basket.SetBasket(basket.GetBasket  +1) ;
                                }}>+</button>
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

export default Cart;