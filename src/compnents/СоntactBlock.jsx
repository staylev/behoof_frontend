import React, { useEffect } from 'react';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot  } from "@fortawesome/free-solid-svg-icons";
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareYoutube,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";



const СоntactBlock = () => {


    return (
        <div className='map_1  '>
            <YMaps className='map_main  '>
                <div>
                    <Map instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} style={{ width: '100%', height: '665px' }} defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>

                </div>
                <div className='container con_block '>
                    <div className='contact_block_map  '>
                        <p className='contact_title p-4'>КОНТАКТЫ</p>
                        <div className='line_contact'></div>
                        <div className='adress_block p-3'>
                            <FontAwesomeIcon className=' pt-1' icon={faLocationDot} style={{width:"18px", height:"18px" ,color: "#6d9c74",}} />
                            <div className='ms-2'>
                                <p className='title_c pb-1'>Наш адрес:</p>
                                <p className='value_c'> МО,  округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
                            </div>
                        </div>
                        <div className='adress_block p-3'>
                            <FontAwesomeIcon className=' pt-1' icon={faEnvelope} style={{ width: "18px", height: "18px", color: "#6d9c74", }} />
                            <div className='ms-2'>
                                <p className='title_c pb-1'>Наша почта:</p>
                                <p className='value_c'> auto.wash@gmail.com</p>
                            </div>
                        </div>
                        <div className='line_contact mt-2'></div>
                        <div className="response_block m-4 ">
                            <button className='but_contact'>ЗАБРОНИРОВАТЬ СТОЛ</button>
                            <div>
                                <p className='contact_phone'>
                                    +7 (917) 510-57-59
                                </p>
                                <p className='text'>
                                    Звоните или оставляйте заявку
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='social_network w-50 m-auto  '>
                                <p>Мы в соц сетях:</p>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                                <FontAwesomeIcon icon={faVk} />
                                <FontAwesomeIcon icon={faSquareYoutube} />
                                <FontAwesomeIcon icon={faSquareInstagram} />

                            </div>
                        </div>
                    </div>
                </div>
            </YMaps>
        </div>
    );
};

export default СоntactBlock;