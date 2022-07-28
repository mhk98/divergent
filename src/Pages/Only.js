import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import only1 from '../images/only1.png'
import only2 from '../images/only2.png'

const Only = () => {
    return (
<div className='py-8'>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>Trending</h1>
            <h3 className='text-white text-xl'>View All</h3>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-[#252E39] rounded-md grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 "
      >
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={only1}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={only2}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={only1}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={only2}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>

        
        
      </Swiper>
    </div>

    );
};

export default Only;