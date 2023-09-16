import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareYoutube,
    faVk,
} from "@fortawesome/free-brands-svg-icons";
import {Circle, MapContainer, TileLayer, Tooltip} from "react-leaflet";
import L from "leaflet";


const ContactBlock = () => {
    const position = [54.989356, 73.368198];
    const position_ = [54.979430, 73.377490];

    function setIcon() {
        return L.icon({
            iconUrl: require('../image/marker.png'),
            iconSize: [80, 80]
        });
    }


    return (
        <div className='map_1  '>
            <MapContainer center={position} zoom={13}
                          scrollWheelZoom={false} className='maps'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />
                <Circle center={position_} radius={0} pathOptions={{color: "#618967"}}>
                    <Tooltip direction="top" opacity={1} permanent border-rdius={20}>
                        <div className='tooltip_costom m-3'>МЫ<br/> ЗДЕСЬ!</div>
                    </Tooltip>
                </Circle>

            </MapContainer>
            <div className='container con_block '>
                <div className='contact_block_map  '>
                    <p className='contact_title p-4'>КОНТАКТЫ</p>
                    <div className='line_contact'></div>
                    <div className='adress_block p-3'>
                        <FontAwesomeIcon className=' pt-1' icon={faLocationDot}
                                         style={{width: "18px", height: "18px", color: "#6d9c74",}}/>
                        <div className='ms-2'>
                            <p className='title_c pb-1'>Наш адрес:</p>
                            <p className='value_c'> МО, округ Красногорск, село Ильинкое, Экспериментальная улица,
                                10</p>
                        </div>
                    </div>
                    <div className='adress_block p-3'>
                        <FontAwesomeIcon className=' pt-1' icon={faEnvelope}
                                         style={{width: "18px", height: "18px", color: "#6d9c74",}}/>
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
                            <FontAwesomeIcon icon={faSquareFacebook}/>
                            <FontAwesomeIcon icon={faVk}/>
                            <FontAwesomeIcon icon={faSquareYoutube}/>
                            <FontAwesomeIcon icon={faSquareInstagram}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;