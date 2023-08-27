import React, { useContext, useState } from "react";
import Location_icon from "../image/Location.svg";
import { faBasketShopping, faMagnifyingGlass, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Form, Modal, Nav, Navbar } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AutchFоrm from "./forms/AutchFоrm";
import RegisterForm from "./forms/RegisterForm";
import {NavLink} from "react-router-dom";

const Header = observer(() => {
    const { basket, user } = useContext(Context);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalShow, setModalShow] = useState(false);
    const modalClose = () => setModalShow(false);
    const modalOpen = () => setModalShow(true);


    return (
        <div>
            <header className="main_header">

                <Navbar expand="xl" className="bg-body-tertiary pt-3">
                    <div className='container '>
                        <Navbar.Brand href="#" className='logo mx-5'>behoof</Navbar.Brand>
                        <Navbar.Toggle onClick={handleShow} />
                        <Navbar>
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
                            <Nav>
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
                                {
                                    user.isAutch==true ?
                                        <button className="but_cabinet" >
                                            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                                            Профиль
                                        </button>
                                        :
                                        <button className="but_cabinet" onClick={modalOpen}>
                                            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                                            Войти
                                        </button>

                                }

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
                        </Navbar>
                        <Offcanvas className="mobile_menu" show={show} onHide={handleClose} placement={"end"}>
                            <Offcanvas.Header closeButton className="ms-3">
                                <Offcanvas.Title className=" text-white">Меню</Offcanvas.Title>
                            </Offcanvas.Header>
                            <div className=" m-3 search_block_mobile">
                                <img src={Location_icon} className="location_icon" />
                                <input
                                    type="text"
                                    className="search"
                                    placeholder="Введите адрес доставки"
                                />
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
                            </div>
                            <ul className="mt-5 mobile_item_menu ">
                                <li><a href="">Асортимент</a></li>
                                <li>{
                                   user.isAuth == true?
                                       <NavLink to='/profile/'>Профиль </NavLink>
                                       :
                                       <a href="#" onClick={modalOpen}>Войти</a>
                                }
                                </li>
                                <li><a href="">Корзина</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                        </Offcanvas>
                    </div>
                </Navbar>

                <Modal show={modalShow} onHide={modalClose} centered>
                    <Modal.Header closeButton>
                        <div className='logo'>behoof</div>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs
                            defaultActiveKey="autch"
                            id="fill-tab-example"
                            className="mb-3 modal_tabs"
                            fill
                        >
                            <Tab eventKey="autch" title="Автооризация">
                                <AutchFоrm></AutchFоrm>
                            </Tab>
                            <Tab eventKey="register" title="Рестрация">
                                 <RegisterForm></RegisterForm>
                            </Tab>

                        </Tabs>

                    </Modal.Body>

                </Modal>
            </header>
        </div>
    );
});

export default Header;
