import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'

const Category = () => {
    return (
        <div>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>Explore Category</h1>
            <h3 className='text-white text-xl'>View All</h3>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        <SwiperSlide><div><img className='rounded box' src={product1} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product2} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product1} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product2} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product1} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product2} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product1} alt="product1"/></div></SwiperSlide>
        <SwiperSlide><div><img className='rounded box' src={product2} alt="product1"/></div></SwiperSlide>
        
      </Swiper>
    </div>
    );
};

export default Category;