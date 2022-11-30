import React from 'react';
import {motion as m } from 'framer-motion';
function Card({url_1 , prod_name , best_price }) {
    return (
        <>
            <m.div className='card'
            animate={{opacity:1}}
            initial={{opacity:0}}
            transition={{
    opacity: { ease: "easeOut" },
    layout: { duration: 0.3 }
  }}
            exit={{opacity:0}}
            >
                                <img src={url_1} alt="Not Found" />

                                <div className='card_details'>

                                    <div>
                                        <p className='prodNameElii'>{prod_name}</p>
                                    </div>


                                    <div> <span>⭐⭐⭐⭐⭐</span> <b>&#x20B9; {best_price}</b></div>


                                </div>

                                <div className='card_buttons'>
                                    <span><button className='atc'>Add To Cart</button></span>
                                    <span><button className='bn'>Buy Now</button></span>
                                </div>


                        </m.div>
        </>
    );
}

export default Card;