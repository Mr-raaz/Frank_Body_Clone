import React from "react";
import "./SingleCart.css"

export const SingleCart = ({image,category})=>{
    return <div className="cart">
        <img src={image} alt="category"/>
        <p>{category}</p>
    </div>
}