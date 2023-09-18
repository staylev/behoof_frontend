import React from 'react';

import Card from 'react-bootstrap/Card';


const SaleItem = (props) => {
    const {data: item} = props;

    return (
        <Card className="cart_sale">
            <Card.Img variant="top" className='sale_img' src={item.preview}/>
            <Card.Body>
                <Card.Title className='title_sale'>
                    {item.title}
                </Card.Title>
                <Card.Text className='description_sale'>
                    {item.description}
                </Card.Text>
                <p className='data_end mt-3'>
                    {item.endTime}
                </p>
            </Card.Body>
        </Card>
    );
};

export default SaleItem;