import React, {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareYoutube,
    faVk,
} from "@fortawesome/free-brands-svg-icons";
import {Circle, MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import {Col, Container} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";


const ContactBlock = (props) => {
    const {data} = props;
    const isMoreLarge = useMediaQuery({query: '(min-width: 992px)'})

    const position = [54.989356, 73.368198];
    const position_ = [54.989356, 73.378198];

    const heightContainer = 500;
    const {node: currentRestaurant} = data[Math.floor(Math.random() * data.length)];

    return (
        <div style={{height: isMoreLarge ? heightContainer : 800}}>
            <MapContainer
                center={
                    isMoreLarge ?
                        [
                            currentRestaurant.geoPosition.coordinates[1],
                            currentRestaurant.geoPosition.coordinates[0] - 0.01,
                        ] :
                        [
                            currentRestaurant.geoPosition.coordinates[1] + 0.005,
                            currentRestaurant.geoPosition.coordinates[0],
                        ]
                }
                zoom={15}
                scrollWheelZoom={false}
                style={{height: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />
                {
                    data.map(({node: item}) =>
                        <Circle
                            key={item.id}
                            radius={0}
                            center={[
                                item.geoPosition.coordinates[1],
                                item.geoPosition.coordinates[0],
                            ]}
                            pathOptions={{color: "#618967"}}
                            onClick={() => console.log(1)}
                        >
                            <Tooltip
                                direction="top"
                                opacity={1}
                                permanent
                                border-rdius={20}
                                interactive={true}
                            >
                                <div className='tooltip_costom m-3'>
                                    МЫ
                                    <br/>
                                    ЗДЕСЬ!
                                </div>
                            </Tooltip>
                        </Circle>
                    )
                }
                <Container
                    className="d-flex align-items-center"
                    style={{height: heightContainer}}
                >
                    <Col
                        className="contact_block_map position-relative col-12 col-lg-6 p-4">
                        <p className='contact_title'>
                            КОНТАКТЫ
                        </p>
                        <div className='line_contact my-3'></div>
                        <div className='adress_block mb-4'>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    color: "#6d9c74",
                                }}/>
                            <div className='ms-2'>
                                <p className='title_c pb-1'>
                                    Наш адрес:
                                </p>
                                <p className='value_c'>
                                    {currentRestaurant.address}
                                </p>
                            </div>
                        </div>
                        <div className='adress_block'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    color: "#6d9c74",
                                }}/>
                            <div className='ms-2'>
                                <p className='title_c pb-1'>Наша почта:</p>
                                <p className='value_c'> auto.wash@gmail.com</p>
                            </div>
                        </div>
                        <div className='line_contact my-3'></div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="response_block mb-3">
                                <button className='but_contact p-3'>
                                    ЗАБРОНИРОВАТЬ СТОЛ
                                </button>
                                <div>
                                    <p className='contact_phone'>
                                        +7 (917) 510-57-59
                                    </p>
                                    <p className='text'>
                                        Звоните или оставляйте заявку
                                    </p>
                                </div>
                            </div>
                            <div className='social_network'>
                                <p>Мы в соц сетях:</p>
                                <FontAwesomeIcon icon={faSquareFacebook}/>
                                <FontAwesomeIcon icon={faVk}/>
                                <FontAwesomeIcon icon={faSquareYoutube}/>
                                <FontAwesomeIcon icon={faSquareInstagram}/>
                            </div>
                        </div>
                    </Col>
                </Container>
            </MapContainer>
        </div>
    );
};

export default ContactBlock;