"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* <SwiperSlide>
          <div className="bg-red-500 h-64 flex items-center justify-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 h-64 flex items-center justify-center">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-64 flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-64 flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-64 flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
