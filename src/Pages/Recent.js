import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import recent1 from '../images/recent1.png'
import recent2 from '../images/recent2.png'

const Recent = () => {
    return (
        <>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>Most Recent</h1>
            <h3 className='text-white text-xl'>View All</h3>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
      >
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={recent1}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={recent2}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={recent1}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={recent2}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={recent2}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Recent;