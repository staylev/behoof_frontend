import React from 'react';
import SaleItem from "./SaleItem";

const SaleBlock = () => {
    return (
        <div className='container'>
            <div className="category_title mt-5 sale">
                <div className="line2"></div>
                <p className="text_title_category">АКЦИИ</p>
            </div>
            <div className='sales   mt-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
                    <SaleItem/>
                ))}
            </div>
        </div>
    );
};

export default SaleBlock;