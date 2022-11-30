import React, { useState } from 'react';
import '../../shop.css'
import heading from '../../../LandingPage/TopSection/img/checking.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from '../../sliderImg/slider1.avif';
import img2 from '../../sliderImg/slider2.avif';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
function InitialOfferSection() {

    const [activecat , setActiveCat] = useState("All Products");
    
    return (
        <>
            <div className="shop_outer">
                <p className='location'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Shop <FontAwesomeIcon icon = {faAngleRight} /></b>&nbsp; All Products</p>


                <div className="slider_Section_shop">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={img2} alt="Not Found" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="Not Found" /></SwiperSlide>
      </Swiper>

                </div>
                <div className="shop_heading">
                    <h1>Explore Our All Products</h1>
                    <p>Our products play a key role during early life. From supporting healthy growth and development to providing the medical nutrition necessary when health is </p>
                </div>

                <div className="category_shop_section">
                        <div>
                        
                    <div className={activecat == "All Products" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("All Products")}>All Products</div>
                    <div className={activecat == "Everyday" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Everyday")}>Everyday</div>
                    <div className={activecat == "Body Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Body Care")}>Body Care</div>
                    <div className={activecat == "Skin Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Skin Care")}>Skin Care</div>
                    <div className={activecat == "Lip Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Lip Care")}>Lip Care</div>
                    <div className={activecat == "Hair" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Hair")}>&nbsp;&nbsp;&nbsp;Hair &nbsp;&nbsp;&nbsp;</div>
                    <div className={activecat == "Perfumes" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat("Perfumes")}>Perfumes</div>
                    
                    </div>
                        <div className='filter_div'>
                                <select>
                                    <option>-- Sort By Price --</option>
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                </select>
                        </div>
                </div>
            </div>
        </>
    );
}

export default InitialOfferSection;