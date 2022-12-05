import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import LimitedTimeDeal from '../../LandingPage/MiddleSection/LimitedTimeDeal';
import LtdCard from '../../LandingPage/MiddleSection/LtdCard';
function SimilarProducts() {

    const recommendaded = [{
        "id": 27,
        "prod_name": "THE ORIGINAL LIP DUO",
        "categories": "FACE",
        "best_price": 1650,
        "mrp": 1870,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2018/08/frank-body-lip-duo-kit_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2018/08/frank-body-lip-duo-kit_DOT.COM_FLAT-LAY.jpg"
      },
      {
        "id": 28,
        "prod_name": "GET ACTIVE FACE KIT",
        "categories": "FACE",
        "best_price": 2094,
        "mrp": 2987,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/05/frank-body-get-active-face-kit_DOT.COM_VESSEL-1.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/05/frank-body-get-active-face-kit_DOT.COM_MODEL-02-1.jpg"
      },
      {
        "id": 29,
        "prod_name": "THE MEGA COMPLEXION CREW KIT",
        "categories": "FACE",
        "best_price": 8764,
        "mrp": 9999,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2018/08/OLD_frank-body-mega-complexion-crew-kit_DOT.COM_VESSEL-1.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2018/08/frank-body-mega-complexion-crew-kit_DOT.COM_MODEL-03-V2.jpg"
      },
      {
        "id": 30,
        "prod_name": "BRIGHTENING EYE SERUM",
        "categories": "FACE",
        "best_price": 397,
        "mrp": 499,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-brightening-eye-serum_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-brightening-eye-serum_DOT.COM_SWATCH.jpg"
      },
      {
        "id": 31,
        "prod_name": "CHARCOAL FACE MASK",
        "categories": "FACE",
        "best_price": 476,
        "mrp": 876,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/08/frank-body-charcoal-face-mask_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/08/franklab_Ingredient_PinsCHARCOAL-1000x1000.png"
      },
      {
        "id": 32,
        "prod_name": "CAFFEINATED FACE MOISTURISER",
        "categories": "FACE",
        "best_price": 1360,
        "mrp": 1600,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2016/12/frank-body-caffeinated-face-moisturiser_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2020/03/franklab_Ingredient_PinsALOE-VERA-1000x1000.png"
      },
      {
        "id": 33,
        "prod_name": "ORIGINAL FACE SCRUB",
        "categories": "FACE",
        "best_price": 765,
        "mrp": 823,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2016/12/frank-body-original-face-scrub_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2016/12/frank-body-original-face-scrub_DOT.COM_SWATCH.jpg"
      },
      {
        "id": 34,
        "prod_name": "GLOW MASK",
        "categories": "FACE",
        "best_price": 345,
        "mrp": 543,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2017/03/frank-body-glow-mask_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2017/03/frank-body-glow-mask_DOT.COM_MODEL-04.jpg"
      },
      {
        "id": 35,
        "prod_name": "BRIGHTENING VITAMIN C MASK",
        "categories": "FACE",
        "best_price": 455,
        "mrp": 934,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2020/03/frank-body-brightening-vitamin-c-mask_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2020/03/frank-body-brightening-vitamin-c-mask_DOT.COM_SWATCH.jpg"
      },
      {
        "id": 36,
        "prod_name": "EXTRA CLEAN FACE WASH",
        "categories": "FACE",
        "best_price": 899,
        "mrp": 988,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/01/frank-body-everyday-extra-clean-face-wash_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/03/franklab_Ingredient_PinsNYACINIMIDE-1000x1000.png"
      },
      {
        "id": 37,
        "prod_name": "REWIND RETINOL SERUM",
        "categories": "FACE",
        "best_price": 654,
        "mrp": 987,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-rewind-retinol-serum_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-rewind-retinol-serum_DOT.COM_SWATCH.jpg"
      },
      {
        "id": 38,
        "prod_name": "HYALURONIC ACID SERUM",
        "categories": "FACE",
        "best_price": 1987,
        "mrp": 2300,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-hydrating-hyaluronic-acid-serum_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/03/frank-body-hydrating-hyaluronic-acid-serum_DOT.COM_SWATCH.jpg"
      },
      {
        "id": 39,
        "prod_name": "CERAMIDE NIGHT CREAM",
        "categories": "FACE",
        "best_price": 1603,
        "mrp": 2344,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2022/05/frank-body-super-ceramide-night-cream_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2022/05/frank-body-super-ceramide-night-cream_DOT.COM_SWATCH-1.jpg"
      },
      {
        "id": 40,
        "prod_name": "MARSHMALLOW LIP SCRUB",
        "categories": "FACE",
        "best_price": 500,
        "mrp": 986,
        "url_1": "https://www.frankbody.com/int/wp-content/uploads/2021/10/frank-body-whip_DOT.COM_VESSEL.jpg",
        "url_2": "https://www.frankbody.com/int/wp-content/uploads/2021/10/frank-body-whip_DOT.COM_FLAT-LAY-01.jpg"
      }]


    return (
        <>
            <div className="recommendation_border">

                <h2 className='recomended'>You May Also Like </h2> <br />
                <div className="slider_section_recom">

                <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >


{
    recommendaded.map((elem)=>{
        return <SwiperSlide> <LtdCard data={elem}/></SwiperSlide>
    })
}
        


      </Swiper>
                    
                </div>
            </div>
        </>
    );
}

export default SimilarProducts;