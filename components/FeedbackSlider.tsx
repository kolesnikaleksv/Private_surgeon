'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { feedbackCardsEn } from '@/localDB/feedbackCardsEn';
import FeedbackCard from '@/components/FeedbackCard';

import 'swiper/css';

const FeedbackSlider = () => {
  const feedbackCards = feedbackCardsEn;
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={4}
      autoplay={true}
      loop={true}
      height={400}
      modules={[Autoplay]}
      breakpoints={{
        1080: { slidesPerView: 4 },
        780: { slidesPerView: 3 },
        400: {
          slidesPerView: 2,
        },
        300: { slidesPerView: 1 },
      }}
    >
      {feedbackCards.map((item) => (
        <SwiperSlide key={item.id}>
          <FeedbackCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackSlider;
