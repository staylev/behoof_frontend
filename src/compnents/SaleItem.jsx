import React from 'react';

import Card from 'react-bootstrap/Card';
import sale1 from '../image/sale1.png'


const SaleItem = () => {
    return (
      <div  className=' col-10 col-sm-8 col-md-7 col-lg-5 col-xl-4 m-3'>
        <Card className="cart_sale">
          <Card.Img variant="top" src={sale1} />
          <Card.Body>
            <Card.Title className='title_sale'>Без мяса? Здесь!</Card.Title>
            <Card.Text className='description_sale'>
              Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи
              и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной
              Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи
              или Греческий салат. Выберите свой вкус!
            </Card.Text>
            <p className='data_end mt-3'>до 31 июля.</p>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SaleItem;