import Switch from "../Switch";
import ChartFunctionsButton from "../../../chart-functions/ChartFunctionsButton";
import DateDisplay from "../DateDisplay";
import DashboardButton from "../../../dashboard/DashboardButton";
import DateSelector from "../date-selector/DateSelector";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function Carousel() {

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={2}
      spaceBetween={25}
      mousewheel={true}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      onInit={(swiper) => {
        // Escalar el elemento central al tamaño deseado
        const middleSlide = swiper.slides[swiper.activeIndex];
        middleSlide.style.transform = "scale(1)"; // Ajusta el valor según tus necesidades
      }}
      onSlideChange={(swiper) => {
        // Restaurar el tamaño de los demás elementos
        swiper.slides.forEach((slide) => {
          slide.style.transform = "scale(0.75)";
        });

        // Escalar el nuevo elemento central al tamaño deseado
        const middleSlide = swiper.slides[swiper.activeIndex];
        middleSlide.style.transform = "scale(1)"; // Ajusta el valor según tus necesidades
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <DateDisplay
          Class={
            'carousel-date 2xl:text-[1.05vw] hover:cursor-pointer w-[55%] h-[130%] text-white text-[1.04rem] border-b-[1px] border-blue-600 text-center'
          } />
      </SwiperSlide>
      <SwiperSlide>
        <ChartFunctionsButton />
      </SwiperSlide>
      <SwiperSlide>
        <Switch />
      </SwiperSlide>
      <SwiperSlide>
        <DashboardButton />
      </SwiperSlide>
    </Swiper>
  );
}





