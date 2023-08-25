import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";



const MainSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="slider" >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div
                        className="slide_img"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="slide_img"
                        alt="two slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="slide_img"
                        alt="tree slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;