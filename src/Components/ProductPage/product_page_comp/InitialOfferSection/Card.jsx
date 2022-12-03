import React, { useEffect, useState } from 'react';
import {motion as m } from 'framer-motion';
import { useAsyncError, useNavigate } from 'react-router-dom';
import {addToCart , quantityZero} from '../../../../ReduxStore/Actions/mainAction';
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Card({data}) {

    let {url_1 , prod_name , best_price  , id , cartStatus} = data;

    const cartData = useSelector((cartdata) => cartdata.cart);

    const [cartState , currCartState] = useState(cartStatus);
    
    const [quant , setQuant] = useState(1);

    const dispatc = useDispatch();

    const navigate = useNavigate();


    function handleProductClick(){
        navigate(`/details/${id}`);
    }

    function clickcheck(){
        addToCart(data , dispatc , id);
        navigate('/cart');
    }

    function addtoc(){

        currCartState(true);

        addToCart(data , dispatc , id);

    }

    function handleIncrementDec(val){

        if(quant + val >= 1){
            setQuant(quant + val)
        }

        if(quant + val == 0){
            currCartState(false);

            quantityZero(cartData , dispatc , id);
        }
        
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
                                    {
                                        cartState ? <span className='product_page_counter'>
                                        <button onClick={()=>handleIncrementDec(-1)}><FontAwesomeIcon icon={faMinus}/></button>
                        <span>{quant}</span>
                            <button onClick={()=>handleIncrementDec(+1)}><FontAwesomeIcon icon={faPlus}/></button>
                                        </span> :<span><button className='atc' onClick={addtoc}>Add To Cart</button></span>

                                    }
                                    <span><button className='bn' onClick={clickcheck}> Buy Now</button></span>
                                </div>


                        </m.div>
        </>
    );
}

export default Card;