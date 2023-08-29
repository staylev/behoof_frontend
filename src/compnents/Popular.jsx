import React, {useEffect, useRef} from 'react';
import Cart from "./Cart";
import {NavLink} from "react-router-dom";
import {MENU_PAGE} from "../utils/consts";

const Popular = (props) => {
    const data = props.data;
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
        <div  className='container'>
            <div className="category_title mt-5">
                <div className="line2"></div>
                <p className="text_title_category">Популярное</p>
            </div>
            <div className="cards mt-4" ref={elRef}>
                {
                    data.map(({node: item}) => {
                        return(
                            <Cart data={item}></Cart>
                        )
                    })
                }
            </div>
            <button className="w-100 mt-4 all_menu" >
                <NavLink to={MENU_PAGE}>Посмотреть все позиции </NavLink>
            </button>
        </div>
    );
};

export default Popular;