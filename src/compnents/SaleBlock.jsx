import React, {useEffect, useRef} from 'react';
import SaleItem from "./SaleItem";

const SaleBlock = () => {
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
        <div className='container'>
            <div className="category_title mt-5  ">
                <div className="line2"></div>
                <p className="text_title_category">АКЦИИ</p>
            </div>
            <div className='sales mt-3' ref={elRef}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
                    <SaleItem/>
                ))}
            </div>
        </div>
    );
};

export default SaleBlock;