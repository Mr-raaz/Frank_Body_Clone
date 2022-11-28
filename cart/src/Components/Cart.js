import React from "react";
import "./Cart.css"

export const Cart = ()=>{
    return <div>
        <div className="div"><p>Your Shopping Basket</p></div>
        <div className="box"><h1>There are currently no items in your basket.</h1>
        <button>CONTINUE SHOPPING</button></div>
    </div>
}