import React, {useEffect, useRef} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "react-bootstrap/Card";
import Cart from "./Cart";



const TabMenu = () => {

    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 3,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
      <div className="container mb-5">
        <div className=" ">
          <Tabs
            defaultActiveKey="-zac"
            id="justify-tab-example"
            className="mb-5 tabs_custom"
          >
            <Tab eventKey="-zac" title="Холодные закуски">
              <div className="category_title mt-5">
                <div className="line2"></div>
                <p className="text_title_category">ХОЛОДНЫЕ ЗАКУСКИ</p>
              </div>
              <div className="cards mt-4" ref={elRef}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
                  <Cart></Cart>
                ))}
              </div>
            </Tab>
            <Tab eventKey="hot-zac" title="Горячие закуски"></Tab>
            <Tab eventKey="meat" title="Мясные блюда"></Tab>
            <Tab eventKey="sup" title="Супы"></Tab>
            <Tab eventKey=" 1" title="Рыбные блюда"></Tab>
            <Tab eventKey=" 2" title="Гриль меню "></Tab>
            <Tab eventKey=" 3" title="Фирменные блюда"></Tab>
            <Tab eventKey=" 4" title="Напитки"></Tab>
          </Tabs>
          <div className="line3 mt-5"> </div>
        </div>
      </div>
    );
};

export default TabMenu;