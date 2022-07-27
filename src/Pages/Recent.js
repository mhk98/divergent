import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'

const Recent = () => {
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
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div> 
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Recent;