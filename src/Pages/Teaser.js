import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import teaser1 from '../images/teaser1.png'
import teaser2 from '../images/teaser2.png'

const Teaser = () => {
    return (
<>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>Teaser</h1>
            <h3 className='text-white text-xl'>View All</h3>
        </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      >
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={teaser1}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={teaser2}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={teaser1}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full   shadow-xl">
            <figure><img src={teaser2}   alt="Shoes" /></figure>

        </div>
        </SwiperSlide>

        
        
      </Swiper>
    </>

    );
};

export default Teaser;