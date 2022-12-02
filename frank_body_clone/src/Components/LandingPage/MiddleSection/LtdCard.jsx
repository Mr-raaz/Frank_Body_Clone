import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {addToCart , quantityZero} from '../../../ReduxStore/Actions/mainAction';
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
function LtdCard({data}) {

    let {id, url_1 , prod_name , best_price , mrp , cartStatus} = data;

    const [curr , setCurr] = useState(cartStatus);
    
    const [quant , setQuant] = useState(1);

    const cartData = useSelector((cartdata) => cartdata.cart);

    const dispatch = useDispatch()

    const navigate = useNavigate();

    function detailClick(){

        navigate(`/details/${id}`)

    }

    function addToCartbtn(){
        setCurr(true);

        addToCart(data ,dispatch , id);

    }

    function handleIncrementDec(val){

        if(quant + val >= 1){
            setQuant(quant + val)
        }

        if(quant + val == 0){
            setCurr(false);

            quantityZero(cartData , dispatch , id);
        }
        
    }

    


    return (
        <div className='ltdCard_div'>
            <img src={url_1} alt="Not found" className='checkkingsize'  onClick={detailClick}/>
            <div className='prodTitle'  onClick={detailClick}>
            <h6  >{prod_name}...</h6>
            </div>
            <div className='price'  onClick={detailClick}>
                <span>&#x20B9;{best_price}</span>
                <span>&#x20B9;{mrp}</span>
            </div>

            <div>
                    {curr ? <>
                        <div className='quant-div'>
                        <button onClick={()=>handleIncrementDec(-1)}><FontAwesomeIcon icon={faMinus}/></button>
                        <span>{quant}</span>
                            <button onClick={()=>handleIncrementDec(+1)}><FontAwesomeIcon icon={faPlus}/></button>
                            
                            
                        </div>
                    </> : <button className='atcbtn2' onClick={addToCartbtn}>Add To Cart</button> }

                    
            </div>
        </div>
    );
}

export default LtdCard;