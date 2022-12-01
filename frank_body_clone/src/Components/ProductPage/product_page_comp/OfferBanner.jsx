import React from "react";
import img2 from "../sliderImg/img1off.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation  , Autoplay} from "swiper";

function OfferBanner() {

    const imgarr = [
        "https://images-static.nykaa.com/uploads/1b5be40f-5094-4ba6-a463-4a1ab8c8ee18.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/146bc8cd-e5ee-4305-bd11-1b9f2c395ad6.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a5fb58d0-4b5a-4f7b-8ce1-6a6f3b04e542.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/174cc9a9-73ce-47b3-8776-a534cfdc929b.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/25c00bd4-d1d7-4404-b76d-77466680b7cf.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/260c7929-ee2c-4efa-a300-e33afd207f00.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/cc1cff17-5f28-4234-9717-ad64623df694.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/b02ec567-2bee-449e-b320-39116cfca7c3.jpg?tr=w-400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/bba63b5a-afd3-4e3a-8790-85e077c9aba4.jpg?tr=w-400,cm-pad_resize"

    ]
  return (
    <>
      <div className="afterProductGrid">
        <img src={img2} alt="Not found" />
      </div>

      <div className="trendingSection">
        <h2><span >---------------</span> Trending<span >---------------</span></h2>

        <div className="trendingSlider">
          <Swiper
            slidesPerView={6}
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
                imgarr.map((elem , idx)=>{
                    return <>
                    <SwiperSlide className="testingClas" key={idx+12}>
                <img src={elem} alt="not found" />
            </SwiperSlide>
                    </>
                })
            }

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OfferBanner;
