import React from 'react';
import {Spinner} from "react-bootstrap";

const PagePreload = () => {
    return (
        <div className="">
            <div className="load_page d-flex">
                <Spinner animation="border" className='m-auto preload page'   />
            </div>
        </div>
    );
};

export default PagePreload;