import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import ban from "../image/баннер 1.png"


const MainSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="slider" >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default MainSlider;