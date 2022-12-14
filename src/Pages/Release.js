import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import release1 from '../images/release1.png'
import release2 from '../images/release2.png'
const Release = () => {
    return (
        <>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>New Release</h1>
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
  <figure><img src={release1}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={release2}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={release1}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={release2}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96   shadow-xl">
  <figure><img src={release1}   alt="Shoes" /></figure>
</div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Release;