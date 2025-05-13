'use client';
import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { teamEn } from '@/localDB/teamEn';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TeamSliderBlock = () => {
  const team = teamEn;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        // navigation
        autoHeight
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          780: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: { slidesPerView: 4 },
        }}
        className="p-10 items-center justify-center"
      >
        {team.map((member) => (
          <SwiperSlide key={member.id} className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-5">
              <div className="w-[270px] max-w-full ">
                <Image
                  src={member.image || '/default-girl.jpg'}
                  width={270}
                  height={400}
                  className="h-[400px] w-[270px] object-cover rounded"
                  alt={'team member'}
                />
                <p className="text-2xl font-bold my-2">{member.name}</p>
                <p className="text-lg mt-2">{member.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamSliderBlock;
