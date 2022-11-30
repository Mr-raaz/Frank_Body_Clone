import React from "react";
import "./Cart.css"

export const Cart = ()=>{
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
            </table>
        </div>
    </div>
}