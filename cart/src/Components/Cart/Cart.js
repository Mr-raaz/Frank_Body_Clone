import React, { useState } from "react";
import {useSelector} from "react-redux";
import "./Cart.css"

export const Cart = ()=>{
    const cartData = useSelector((storeData)=>storeData.cart);
    const [count,setCount] = useState(1);

    const increaseCount = ()=>{
        setCount((count)=>count+1);
    }

    const decreaseCount = ()=>{
        setCount((count)=>count-1);
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
                            <div><p>{el.title}</p>
                            <p>In stock</p></div></div>
                            <p>{el.price}</p>
                            <div style={{display:"flex",flexDirection:"row",gap:"10px"}}><button onClick={increaseCount}>+</button>
                            <p> {count} </p>
                            <button disabled={count === 1 ? true : false} onClick={decreaseCount}>-</button></div>
                            <p>{el.price}</p>
                            <p>*</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}