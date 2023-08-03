import React, {useEffect} from 'react';
import {Map, YMaps} from "@pbe/react-yandex-maps";


const СоntactBlock = () => {

    return (
        <div className='container'>
            <div className='position-relative'>
                <YMaps className='map_main' style="filter: grayscale(1);">
                    <div>
                        <Map defaultState={{center: [55.75, 37.57], zoom: 9}}/>
                    </div>
                </YMaps>
                <div className=" position-absolute top-0 div">

                </div>
            </div>
        </div>
    );
};

export default СоntactBlock;