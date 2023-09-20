import React, {useEffect, useRef} from 'react';
import SaleItem from "./SaleItem";
import {NavLink} from "react-router-dom";
import {MENU_PAGE, SALES_PAGES} from "../utils/consts";
import {Col} from "react-bootstrap";

const SaleBlock = (props) => {
    const {data} = props;

    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) {
                    return null;
                }

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
        <div className='container'>
            <div className="category_title mt-5">
                <div className="line2"></div>
                <p className="text_title_category">АКЦИИ</p>
            </div>
            <div className='sales mt-3' ref={elRef}>
                {
                    data.map(({node: item}) =>
                        <Col key={item.id}
                            className='col-10 col-sm-8 col-md-7 col-lg-5 col-xl-4 m-3'>
                            <SaleItem data={item}/>
                        </Col>
                    )
                }
            </div>
            <NavLink to={SALES_PAGES}>

            </NavLink>
        </div>
    );
};

export default SaleBlock;