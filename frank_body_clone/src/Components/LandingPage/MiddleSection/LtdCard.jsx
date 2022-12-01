import React from 'react';
import { useNavigate } from 'react-router-dom';
function LtdCard({id , url_1 , prod_name , best_price , mrp}) {
    const navigate = useNavigate();

    function detailClick(){
        navigate(`/details/${id}`)
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
                <button className='atcbtn2'>Add To Cart</button>
            </div>
        </div>
    );
}

export default LtdCard;