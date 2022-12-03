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
import {setActiveCategory , setSortingOrder} from '../../../../ReduxStore/Actions/mainAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function InitialOfferSection() {

    const [activecat , setActiveCat] = useState("All Products");

    const dispatch = useDispatch();

    const data = useSelector((store) => store.products);

    
    function setActiveCat2(val){

        setActiveCat(val);

        setActiveCategory(val , dispatch);

    }

    function handlesortChange(e){
            setSortingOrder(e.target.value , dispatch)
    }
    
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
                        
                    <div className={activecat == "All Products" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("All Products")}>All Products</div>
                    <div className={activecat == "Everyday" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("EVERYDAY")}>Everyday</div>
                    <div className={activecat == "Body Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("Body Care")}>Body Care</div>
                    <div className={activecat == "Skin Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("Skin Care")}>Skin Care</div>
                    <div className={activecat == "Lip Care" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("Lip Care")}>Lip Care</div>
                    <div className={activecat == "HAIR" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("HAIR")}>&nbsp;&nbsp;&nbsp;Hair &nbsp;&nbsp;&nbsp;</div>
                    <div className={activecat == "Perfumes" ? "activeated_category" : "nac"}  onClick={()=>setActiveCat2("Perfumes")}>Perfumes</div>
                    
                    </div>
                        <div className='filter_div'>

                                <select onChange={handlesortChange}>
                                    <option value="sbp">-- Sort By Price --</option>
                                    <option value="lth">Price Low to High</option>
                                    <option value="htl">Price High to Low</option>
                                </select>


                        </div>
                </div>
            </div>
        </>
    );
}

export default InitialOfferSection;