import React, { useEffect } from 'react';
import {motion as m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Card({url_1 , prod_name , best_price  , id , func}) {

    const navigate = useNavigate();


    function handleProductClick(){
        navigate(`/details/${id}`);
    }

    function clickcheck(){
        alert("click Check working")
    }

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
                                <img src={url_1} alt="Not Found"  onClick={handleProductClick}/>

                                <div className='card_details' onClick={handleProductClick}>

                                    <div>
                                        <p className='prodNameElii'>{prod_name}</p>
                                    </div>


                                    <div> <span>⭐⭐⭐⭐⭐</span> <b>&#x20B9; {best_price}</b></div>


                                </div>

                                <div className='card_buttons'>
                                    <span><button className='atc' >Add To Cart</button></span>
                                    <span><button className='bn' onClick={clickcheck}> Buy Now</button></span>
                                </div>


                        </m.div>
        </>
    );
}

export default Card;