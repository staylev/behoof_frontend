import React from 'react';

import Card from 'react-bootstrap/Card';


const SaleItem = (props) => {
    const {data: item} = props;

    return (
        <div className='  col-10 col-sm-8 col-md-7 col-lg-5 col-xl-4 m-3'>
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
        </div>
    );
};

export default SaleItem;