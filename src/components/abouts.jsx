import React from 'react';
import {faBolt, faCarrot, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Abouts = () => {
    return (
        <div className='container'>
            <div className='about_b'>
                <div className='abouts_block'>
                    <div className='gradient'></div>
                </div>
                <div className='row position-absolute top-0 m-5'>
                    <div className="col-12 col-xl-6">
                        <div className="about  ">
                            <h2 className='mt-5 title_about'>
                                НАШЕ КАФЕ
                            </h2>
                            <p className='mt-5 description_about'>
                                Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в
                                черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно
                                уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского
                                сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки
                                на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный
                                детский домик и бассейн.
                            </p>
                            <button className=' mt-5 but_about'>ПОСМОТРЕТЬ МЕНЮ</button>
                        </div>
                    </div>

                    <div className="col-12 col-xl-6 d-none d-xl-block">
                        <div className="ms-5 about_items">
                            <div className="row gy-3">
                                <div className="col-6">
                                    <div className="about_item p-4">
                                        <FontAwesomeIcon className='about_icon  ' icon={faCarrot}/>
                                        <p className='mt-3 about_name'>Свежайшие продукты</p>
                                    </div>
                                </div>
                                <div className="col-6  ">
                                    <div className="about_item ">
                                        <FontAwesomeIcon className='about_icon  ' icon={faBolt}/>
                                        <p className='mt-3 about_name'>Быстрая доставка</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="about_item p-4">
                                        <FontAwesomeIcon className='about_icon  ' icon={faUtensils}/>
                                        <p className='mt-3 about_name'>Свежайшие продукты</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="about_item p-4">
                                        <FontAwesomeIcon className='about_icon  ' icon={faCarrot}/>
                                        <p className='mt-3 about_name'>Свежайшие продукты</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;