'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const CarouselBanner = () => {
  const starter = [
    {
      id: 1,
      image: '/slider_surgeon_1.jpg',
      description: 'Ми можем те, що не можуть інші!',
    },
    {
      id: 2,
      image: '/slider_surgeon_2.jpg',
      description: 'Інтеграція Європейської медицини в Україні.',
    },
    {
      id: 3,
      image: '/slider_surgeon_3.webp',
      description: 'Мінімально інвазивний метод імплантації та хірургії',
    },
  ];
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="min-h-[550px] text-main-ultralight ml-0">
          {starter.map((item) => (
            <CarouselItem key={item.id} className="pl-0">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  fill
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  alt={'Slider picture 1'}
                  priority
                />
                <div className="absolute left-0 right-0 bottom-0 top-0 p-5 xs:p-10 sm:p-25  z-2">
                  <p className="text-5xl font-bold mt-10">The Private Clinic</p>
                  <p className="text-3xl font-bold mt-10">{item.description}</p>
                </div>
                <div className="absolute left-0 right-0 bottom-0 top-0 bg-black z-1 opacity-5"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>
    </>
  );
};

export default CarouselBanner;
