import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { AddQuantityKey, DeleteFromCart } from "../Redux/Action/Action";
import "./Cart.css"

export const Cart = ()=>{
    const cartData = useSelector((storeData)=>storeData.cart);
    const [count,setCount] = useState(1);
    const [totalPrice,setTotalPrice] = useState(657);
    const dispatch = useDispatch();

    useEffect(()=>{
      if("quantity" in cartData[0]){
        console.log(true)
      }
      else{
        AddQuantityKey(cartData,dispatch)
      }
    },[])

    const increaseCount = ()=>{
        setCount((count)=>count+1);
        // countRef.current.innerText = "";
        // countRef.current.innerText = countRef.current.value + 1;
        // console.log(countRef.current)
    }

    const decreaseCount = ()=>{
        setCount((count)=>count-1);
    }

    const handleCart = (index)=>{
       DeleteFromCart(cartData,index,dispatch)
    }

    const discount = ()=>{

    }

    return <div>
        <div className="head">
        <p>Your Shopping Basket</p>
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
                            <div style={{display:"flex",flexDirection:"row",width:"500px",marginRight:"5px"}}><img src={el.image} width="100px" height="80px" alt={el.title}/>
                            <div><p className="ptag">{el.title}</p>
                            <p className="sty">In stock</p>
                            <div className="icon"><i class="fa-regular fa-heart"></i>  Save to Wishlist</div></div></div>
                            <p>{el.price}€</p>
                            <div style={{display:"flex",flexDirection:"row",gap:"10px"}}><button disabled={count === 1 ? true : false} onClick={decreaseCount}>-</button>
                            <p>{count}</p>
                            <button onClick={increaseCount}>+</button>
                            </div>
                            <p>{Math.round(el.price*count * 100) / 100}€</p>
                            <img src="https://th.bing.com/th/id/R.f6883ee1ce2e0e3755a1892da2fe7e3c?rik=ozgkFfeviLMaDg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_265949.png&ehk=gPghjaahwRbD4GGEcjuhCM8HJhQYy%2b2YzE5lGs5PvMo%3d&risl=&pid=ImgRaw&r=0" width="20px" height="20px" style={{marginTop:"15px"}} alt="" onClick={()=>handleCart(index)}/>
                        </div>
                    })
                }
            </div>
        </div>
        <div className="subtotal"><p> <i class="fa-regular fa-star"></i> Complete your order to earn {cartData.length*14+4} points</p>
            <div style={{display:"flex",flexDirection:"row",width:"38%",gap:"80px"}} ><p>Basket Subtotal : </p> <p> {totalPrice}€</p></div></div>
        <div className="discount">
            <div className="discount-child"><input type="text" placeholder="Got a discount code ? Enter it here"/>
            <button onClick={discount}>Add</button></div>
        </div>
        <div>
            <button>CONTINUE SHOPPING</button>
            <div className="foot">
                <button>CHECKOUT SECURELY NOW</button>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
}