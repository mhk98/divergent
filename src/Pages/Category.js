import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'

const Category = () => {
    return (
        <>
        <div className='flex items-center justify-between py-8'>
            <h1 className='text-white text-3xl'>Explore Category</h1>
            <h3 className='text-white text-xl'>View All</h3>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
    </>
    );
};

export default Category;