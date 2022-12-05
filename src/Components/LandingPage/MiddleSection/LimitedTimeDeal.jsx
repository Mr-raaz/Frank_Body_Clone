import React, { useEffect, useState } from 'react';
import './limited.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation  , Autoplay} from "swiper";
import mainAction from '../../../ReduxStore/Actions/mainAction';
import { useDispatch } from 'react-redux'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock , faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Timer from './Timer';
import LtdCard from './LtdCard';
function LimitedTimeDeal() {


    const [data , updateData] = useState([])

    const [width , setWidth] = useState(window.screen.width);

    function actual() {
        setWidth(window.innerWidth);
      }

    useEffect(()=>{

        window.addEventListener("resize" , actual);
        console.log(width)
        return () => {
            window.removeEventListener("resize", actual);
          };
    })

    function updateTrending(val){
        
        updateData(val)
    }


    const dispatch = useDispatch();

    useEffect(()=>{
        mainAction(dispatch , updateTrending)
    },[])

    return (
        <>
            <div className="limitedTimeDealOuter">
            <span className='testinglimte'><h2>Limited Time Deal</h2> <button>View All <FontAwesomeIcon   icon={faAngleRight} /></button></span>
            <p  className='timerComp'><FontAwesomeIcon   icon={faClock} /> <Timer /></p>
            <Swiper
        slidesPerView={width > 500 ? (width >  780 ? 5 : 3) : 1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        {
            data.map((elem , idx)=>{
                return <SwiperSlide key={idx+93}><LtdCard  key={idx+9} data = {elem}  /></SwiperSlide>
            })
        }
      </Swiper>
            </div>

        </>
    );
}

export default LimitedTimeDeal;