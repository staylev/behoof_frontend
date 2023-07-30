import React from "react";
import Location_icon from "../image/Location.svg";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <header className="main_header">
        <div className="container block">
          <div className="logo">behoof</div>
          <div className="search_block">
            <img src={Location_icon} className="location_icon" />
            <input
              type="text"
              className="search"
              placeholder="Введите адрес доставки"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <circle
                cx="9.76657"
                cy="9.7666"
                r="8.98856"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0183 16.4851L19.5423 20"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
          <button className="basket_but">
            Корзина
            <div className="line"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="white" />
            </svg>
            <p className="value_basket">5</p>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
