import React, {useContext, useState} from "react";
import Location_icon from "../image/Location.svg";
import {faBasketShopping, faMagnifyingGlass, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Nav, Navbar} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = observer(() => {
    const {basket} = useContext(Context);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <header className="main_header">

                <Navbar expand="lg" className="bg-body-tertiary pt-3">
                    <div className='container '>
                        <Navbar.Brand href="#" className='logo mx-5'>behoof</Navbar.Brand>
                        <Navbar.Toggle onClick={handleShow}  />
                        <Navbar.Collapse>
                            <Nav>
                                <div className="search_block">
                                    <img src={Location_icon} className="location_icon" />
                                    <input
                                        type="text"
                                        className="search"
                                        placeholder="Введите адрес доставки"
                                    />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
                                </div>
                            </Nav>
                            <Nav >
                                <div className="contact_block">
                                    <div className="circle">
                                        <FontAwesomeIcon className="contact_icon" icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <p className="contact_text">Контакты: </p>
                                        <p>
                                            <a className="contact_number" href="tel:+7 (917) 510-57-59">
                                                +7 (917) 510-57-59
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </Nav>
                            <Nav>
                                <button className="basket_but">
                                    Корзина
                                    <div className="line"></div>
                                    {
                                        basket.GetBasket === 0 ?
                                            <FontAwesomeIcon
                                                icon={faBasketShopping}
                                                style={{ color: "#ffffff" }}
                                            />
                                            :
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <circle cx="12" cy="12" r="12" fill="white" />
                                                </svg>
                                                <p className="value_basket">{basket.GetBasket}</p>
                                            </>
                                    }
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                       

                        <Offcanvas className="mobile_menu" show={show} onHide={handleClose} placement={"end"}>
                                <div className=" mt-5 search_block_mobile">
                                    <img src={Location_icon} className="location_icon"/>
                                    <input
                                        type="text"
                                        className="search"
                                        placeholder="Введите адрес доставки"
                                    />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/>
                                </div>
                                <ul className="mt-5">
                                    <li>Асортимент</li>
                                    <li>Профиль</li>
                                    <li>Корзина</li>
                                    <li>Контакты</li>
                                </ul>
                        </Offcanvas>
                    </div>
                </Navbar>
            </header>
        </div>
    );
});

export default Header;
