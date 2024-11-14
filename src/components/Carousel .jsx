import React from 'react'
import Discount from './Discount'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel () {

    const macBook = 'https://images.macrumors.com/t/UUQat1yNjz4nwnUTGmC9GpbgQ_E=/1600x0/article-new/2024/05/m3-macbook-air-blue.jpg'
    const iPhone = 'https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg'
    const smartTv = 'https://images.macrumors.com/t/vETo2Q5WOvSZHk0XU1qzLM8_EHw=/1600x1200/smart/article-new/2024/08/samsung-smart-monitor-blue.jpg'

  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Discount url={macBook} title="Laptops Sale!" discount="Work and Play – Grab a Laptop at Unbeatable Prices!"/>
        </SwiperSlide>
        <SwiperSlide>
            <Discount url={iPhone} title="Smartphone Deals" discount="Upgrade Your Tech – Save Big on Smartphones!"/>
        </SwiperSlide>
        <SwiperSlide>
            <Discount url={smartTv} title="TVs at New Year Prices" discount="Bring Home the Big Screen – Discounts on All TVs!"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel 