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
        slidesPerView={5}
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
            data.map((elem)=>{
                return <SwiperSlide><LtdCard  {...elem}/></SwiperSlide>
            })
        }
      </Swiper>
            </div>

<br /> <br /><br /><br /><br />

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum laboriosam mollitia fugiat dignissimos, corrupti asperiores ducimus est dolorem adipisci eveniet impedit minima esse perspiciatis eligendi a debitis pariatur inventore earum neque. Repudiandae qui modi, eum reiciendis et rerum fugit cupiditate! Qui consequatur quidem, labore nihil, ea velit fugiat rem ducimus tempora culpa distinctio exercitationem officia ut error explicabo similique, sunt amet? Ducimus adipisci commodi est minus beatae obcaecati? Assumenda provident totam quisquam amet consequuntur quae consequatur harum? Perspiciatis placeat ad, excepturi tempora sequi enim fugiat nobis molestias consequatur ab, suscipit corrupti! Deleniti vitae et obcaecati quasi id debitis veritatis similique.
        </>
    );
}

export default LimitedTimeDeal;