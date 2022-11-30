import React from "react";
import { SingleCart } from "../SingleCart/SingleCart";
import "./EmptyCart.css"

export const EmptyCart = ()=>{
    return <div>
        <div className="div"><p>Your Shopping Basket</p></div>
        <div className="box"><h1>There are currently no items in your basket.</h1>
        <button>CONTINUE SHOPPING</button></div>
        <div className="bottom-box">
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/15/original-THG-PRIMARY-BANNER_V2_1200x675_%282%29-024915.jpg" category = "Shop All"/>
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/54/original-THG-CATEGORY-BANNER-BODY-HERO-1200x675-024954.jpg" category = "Body"/>
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/06/original-THG-CATEGORY-BANNER-FACE-HERO-1200x675-025006.jpg" category = "Face"/>
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/17/original-THG-CATEGORY-BANNER-HAIR-HERO-1200x675_%281%29-025017.jpg" category = "Hair"/>
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/41/original-THG-CATEGORY-BANNER-KITS-HERO-1200x675_%281%29-025041.jpg" category = "Sets & Kits"/>
            <SingleCart image="https://static.thcdn.com/widgets/289-eu/37/original-THG-PRIMARY-BANNER-OG-SCRUB1200x675_%281%29-025137.jpg" category = "Best Sellers"/>
        </div>
    </div>
}