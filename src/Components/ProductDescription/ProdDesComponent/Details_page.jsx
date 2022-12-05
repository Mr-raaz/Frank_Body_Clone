import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addToCart , quantityZero} from '../../../ReduxStore/Actions/mainAction';
import { useNavigate } from "react-router-dom";
function Details_page({data}) {


  let {id ,  prod_name, url_1, url_2  , categories , mrp , best_price , cartStatus} = data;

  const cartData = useSelector((cartdata) => cartdata.cart);

  const [cartState , currCartState] = useState(cartStatus);
  
  const [quant , setQuant] = useState(1);

  const dispatc = useDispatch();

  const navigate = useNavigate();

  const [currImg , setCurr] = useState(url_1);



  function changeImage(val){
    if(val == 1) setCurr(url_2);
    if(val == 2) setCurr("https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_2.jpg")
    if(val == 3) setCurr("https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_5.jpg")
    if(val == 4) setCurr("https://images-static.nykaa.com/media/catalog/product/e/0/e0ca2ce3607347879367_6.jpg")
    if(val == 0) setCurr(url_1);
  }


  function addToCartDes(){

    currCartState(true);

    addToCart(data , dispatc , id);

  }
  function buyNowTrigger(){
    addToCart(data , dispatc , id);
    navigate('/cart');
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
      <div className="location_product_des">
        <p className="location">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>
            Shop <FontAwesomeIcon icon={faAngleRight} />
          </b>
          &nbsp; Details
        </p>
      </div>

      <div className="product_detail_outer">
        <div className="firstContaier">
          <div className="other_images_container">
            <div onClick={()=> changeImage(1)}>
              <img src={url_2} alt="" />
            </div>

            <div onClick={()=> changeImage(0)}>
              <img src={url_1} alt="" />
            </div>

            <div onClick={()=> changeImage(2)} >
              <img
                src="https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_2.jpg"
                alt="not found"
              />
            </div>
            <div onClick={()=> changeImage(3)}>
              <img
                src="https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_5.jpg"
                alt="not found"
              />
            </div>
            <div onClick={()=> changeImage(4)}>
              <img
                src="https://images-static.nykaa.com/media/catalog/product/e/0/e0ca2ce3607347879367_6.jpg"
                alt="not found"
              />
            </div>
          </div>

          <div className="image_container">
            <img src={currImg} alt="Not Found" />
          </div>
        </div>

        <div className="product_info">
            <div className="product_name_price">
            <h3>{prod_name}</h3>
            <p className="rating"> ⭐⭐⭐⭐⭐ <span >43 ratings & 15 reviews</span></p>

            <p className="cate"><span>{categories}</span> <span>Body Care</span></p>
            </div>
            

            <p className="price_sec"> <span className="mrp">Best Price: </span>   <span className="normal_price"> &nbsp; &#x20B9;{best_price}</span> <span className="discount2"> 15% Off</span></p>
            <p className="tax">(Inclusive all taxes)</p>

            <div className="otherDetails">
                <p>*This product cannot be returned for a refund or exchange.</p>
                <p>*Country of Origin: Germany</p>
                <p>*Mkf: Frank Body</p>
                <p>*Delivery charges if applicable will be applied at checkout</p>
            </div>

            <div className="atcbtn3">
                {
                  cartState ? <>
                  <span className='product_page_counter_detail'>
                                        <button onClick={()=>handleIncrementDec(-1)}><FontAwesomeIcon icon={faMinus}/></button>
                        <span>{quant}</span>
                            <button onClick={()=>handleIncrementDec(+1)}><FontAwesomeIcon icon={faPlus}/></button>
                                        </span>


                  </> : <button onClick={addToCartDes}>Add To Cart</button>
                }
                <button onClick={buyNowTrigger}>Buy Now</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Details_page;
