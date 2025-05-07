'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { feedbackCardsEn } from '@/localDB/feedbackCardsEn';
import FeedbackCard from '@/components/FeedbackCard';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeedbackSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const feedbackCards = feedbackCardsEn;

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        loop={true}
        autoHeight
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation, Scrollbar]}
        breakpoints={{
          980: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          430: {
            slidesPerView: 2,
          },
        }}
        className=""
        tag="section"
        wrapperTag="ul"
        next-el={'prev-button'}
      >
        {feedbackCards.map((item) => (
          <SwiperSlide key={item.id} tag="li">
            <FeedbackCard item={item} swiperRef={swiperRef} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="hidden md:block absolute top-0 bottom-0 m-auto -left-15 text-main-gray"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={75} strokeWidth={1} />
      </button>
      <button
        className="hidden md:block absolute top-0 bottom-0 m-auto -right-15 text-main-gray"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={75} strokeWidth={1} />
      </button>
    </>
  );
};

export default FeedbackSlider;
