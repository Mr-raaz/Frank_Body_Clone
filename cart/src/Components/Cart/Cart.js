import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { AddQuantityKey, DecreaseQuantity, DeleteFromCart, IncreaseQuantity } from "../Redux/Action/Action";
import "./Cart.css"

export const Cart = ()=>{
    const cartData = useSelector((storeData)=>storeData.cart);
    const [totalPrice,setTotalPrice] = useState(0);
    const [coupon,setCoupon] = useState(false);
    const discountRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        AddQuantityKey(cartData,dispatch)
    },[])

    useEffect(()=>{
        setTotalPrice(cartData.reduce((acc,el)=>{
            return acc + el.price * el.quantity;
        },0))
    },[cartData])

    const increaseCount = (index)=>{
       IncreaseQuantity(cartData,index,dispatch)
    }

    const decreaseCount = (index)=>{
        DecreaseQuantity(cartData,index,dispatch)
    }

    const handleCart = (index)=>{
       DeleteFromCart(cartData,index,dispatch)
    }

    const discount = ()=>{
        if(discountRef.current.value === "masai500" && totalPrice > 2000 && coupon === false) {
            setTotalPrice((prev)=>prev-500);
        }
        else if(discountRef.current.value === "masai200" && totalPrice > 1000 && coupon === false){
            setTotalPrice((prev)=>prev-200);
        }
        setCoupon(true);
    }

    return <div>
        <div className="head">
        <p>Your Shopping Basket</p>

         {/* Link CHECKOUT SECURELY button  */}

        <button>CHECKOUT SECURELY NOW</button>
        </div>
        <div>
            <div className="item-heading">
                <p style={{width:"530px"}}>ITEMS</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p></p>
            </div>
            <div>
                {
                    cartData.map((el,index)=>{
                        return <div className = "cartEle" key={index+1}>
                            <div style={{display:"flex",flexDirection:"row",width:"500px",marginRight:"5px"}}>
                                <img src={el.image} width="100px" height="80px" alt={el.title}/>
                            <div>
                                <p className="ptag">{el.title}</p>
                                <p className="sty">In stock</p>
                            <div className="icon">
                                <i class="fa-regular fa-heart"></i>  Save to Wishlist
                                </div>
                                </div>
                                </div>
                            <p>{el.price}₹</p>
                            <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                                <button disabled = {el.quantity === 1 ? true : false} onClick={()=>decreaseCount(index)}>-</button>
                                <p>{el.quantity}</p>
                                <button disabled = {el.quantity === 10 ? true : false} onClick={()=>increaseCount(index)}>+</button>
                            </div>
                            <p>{Math.round(el.price*el.quantity * 100) / 100}₹</p>
                            <img src="https://th.bing.com/th/id/R.f6883ee1ce2e0e3755a1892da2fe7e3c?rik=ozgkFfeviLMaDg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_265949.png&ehk=gPghjaahwRbD4GGEcjuhCM8HJhQYy%2b2YzE5lGs5PvMo%3d&risl=&pid=ImgRaw&r=0" width="20px" height="20px" style={{marginTop:"15px"}} alt="" onClick={()=>handleCart(index)}/>
                        </div>
                    })
                }
            </div>
        </div>
        <div className="subtotal">
            <p> <i class="fa-regular fa-star"></i> Complete your order to earn {Math.round(totalPrice/32)} points</p>
            <div style={{display:"flex",flexDirection:"row",width:"38%",gap:"80px"}} >
                <p>Basket Subtotal : </p> 
                <p>{Math.round(totalPrice * 100)/100}₹</p></div></div>
        <div className="discount">
            <div className="discount-child">
                <input type="text" placeholder="Got a discount code ? Enter it here" ref={discountRef}/>
                <button onClick={discount}>Add</button></div>
            </div>
        <div className="foot">

            {/* Link the continue Shopping button  */}

            <button>CONTINUE SHOPPING</button>
            <div className="foot-child">

                {/* Link CHECKOUT SECURELY button  */}

                <button>CHECKOUT SECURELY NOW</button>
                <div>
                    <img src= "https://www.onlinecasinos.org.uk/images/CASINO/Banking/gpay.png" width="60px" height="35px" alt=""/>
                    <img src= "https://th.bing.com/th/id/R.da6e94dd3c89f40db67c3876d27674dd?rik=aBIV9h1KtgQbLg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-c-anBBTMiTw%2fTVfnxr6OGvI%2fAAAAAAAAJQ4%2f7fNAYeoff8o%2fs1600%2fpaypal_logo16.jpg&ehk=Fo%2fIl8nSvF8o5aqMGL3ejj7a9jWYwEZppOmB8y9TMl0%3d&risl=&pid=ImgRaw&r=0" width="60px" height="35px" alt=""/>
                    <img src= "https://www.aboutwebsites.info/wp-content/uploads/2020/11/Paytm-Logo.jpg" width="60px" height="35px" alt=""/>
                    <img src= "https://laudco.com/storage/case-studies/July2019/gyKfHOjRAPp7JiqiAT01.png" width="60px" height="35px" alt=""/>
                </div>
            </div>
        </div>
        <div className="chat">
            <div className="chat-child1">
                
            </div>
            <div className="chat-child2">
            </div>
        </div>
    </div>
}