import Switch from "../Switch";
import ChartFunctionsButton from "../../../chart-functions/ChartFunctionsButton";
import DateDisplay from "../DateDisplay";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function Carousel() {  

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={2}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DateDisplay
            Class={
              'carousel-date w-[45%] h-[140%] hover:bg-blue-600 text-white text-[1.04rem] border-b-[1px] border-blue-600 hover:cursor-pointer text-center hover:rounded'
            } />
        </SwiperSlide>
        <SwiperSlide>
          <Switch />
        </SwiperSlide>
        <SwiperSlide>
          <ChartFunctionsButton />
        </SwiperSlide>
      </Swiper>
    </>
  );
}





