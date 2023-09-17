import React, {useEffect, useRef} from 'react';
import SmallFoodCard from "../cards/SmallFoodCard";
import {NavLink} from "react-router-dom";
import {MENU_PAGE} from "../../utils/consts";

const FoodList = (props) => {
    const {
        data: {
            edges,
            title,
        },
    } = props;
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
                <p className="text_title_category">
                    {title}
                </p>
            </div>
            <div className="cards mt-4" ref={elRef}>
                {
                    edges.map(({node: item}) =>
                        <SmallFoodCard data={item}/>
                    )
                }
            </div>
            <button className="w-100 mt-4 all_menu">
                <NavLink to={MENU_PAGE}>Посмотреть все позиции </NavLink>
            </button>
        </div>
    );
};

export default FoodList;