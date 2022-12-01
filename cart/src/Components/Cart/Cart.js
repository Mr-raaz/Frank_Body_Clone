import React from "react";
import {useSelector} from "react-redux";
import "./Cart.css"

export const Cart = ()=>{
    const cartData = useSelector((storeData)=>storeData.cart);
    return <div>
        <div className="head">
        <p>Your Shopping Basket</p>
        <button>CHECKOUT SECURELY NOW</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ITEMS</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
}