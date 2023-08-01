import React, {useContext} from "react";
import Location_icon from "../image/Location.svg";
import {faBasketShopping, faMagnifyingGlass, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Header = observer(() => {
    const {basket} = useContext(Context);
    return (
        <div>
            <header className="main_header">
                <div className="container block">
                    <div className="logo mx-5">behoof</div>
                    <div className="search_block">
                        <img src={Location_icon} className="location_icon"/>
                        <input
                            type="text"
                            className="search"
                            placeholder="Введите адрес доставки"
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}}/>


                    </div>
                    <div className="contact_block">
                        <div className="circle">
                            <FontAwesomeIcon className="contact_icon" icon={faPhoneVolume}/>
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
                    <button className="basket_but">
                        Корзина
                        <div className="line"></div>
                        {
                            basket.GetBasket === 0 ?
                                <FontAwesomeIcon
                                    icon={faBasketShopping}
                                    style={{color: "#ffffff"}}
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
                                        <circle cx="12" cy="12" r="12" fill="white"/>
                                    </svg>
                                    <p className="value_basket">{basket.GetBasket}</p>
                                </>
                        }

                    </button>
                </div>
            </header>
        </div>
    );
});

export default Header;
