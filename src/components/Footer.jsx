import React from 'react';

const Footer = () => {
    return (
      <div className="main_footer ">
        <div className="container foot">
          <div className="company_block">
            <div className="logo pt-3 m-0">behoof</div>
            <p className="copy">
              © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
            </p>
            <ul className=" mt-2">
              <li>
                <a className="menu_items" href="">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a className="menu_items" href="">
                  Карта сайта
                </a>
              </li>
              <li>
                <a className="menu_items" href="">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div className="nav_footer ">
            <p>
              <a hrer="" className="nav_item">
                О ресторане
              </a>
            </p>
            <p>
              <a hrer="" className="nav_item">
                Условия доставки
              </a>
            </p>
            <p>
              <a hrer="" className="nav_item">
                Возврат товара
              </a>
            </p>
            <p>
              <a hrer="" className="nav_item">
                Акции
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Footer;