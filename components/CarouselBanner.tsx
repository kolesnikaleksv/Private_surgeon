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
import { useTranslations } from 'next-intl';

const CarouselBanner = () => {
  const b = useTranslations('sliderBanner');

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="min-h-[550px] text-custom-darkgray ml-0">
          <CarouselItem key={1} className="pl-0">
            <div className="relative w-full h-full">
              <Image
                src={'/slider_surgeon_1.jpg'}
                fill
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={'Slider picture 1'}
                priority
              />
              <div className="slider-textblock-wrapper">
                <div className="slider-textblock">
                  <p className="slider-title">The Private Surgeon Clinic</p>
                  <p className="slider-description">{b('slide1')}</p>
                </div>
              </div>
              <div className="slider-overlay"></div>
            </div>
          </CarouselItem>
          <CarouselItem key={2} className="pl-0">
            <div className="relative w-full h-full">
              <Image
                src={'/slider_surgeon_2.jpg'}
                fill
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={'Slider picture 2'}
                priority
              />
              <div className="slider-textblock-wrapper">
                <div className="slider-textblock">
                  <p className="slider-title">The Private Surgeon Clinic</p>
                  <p className="slider-description">{b('slide2')}</p>
                </div>
              </div>
              <div className="slider-overlay"></div>
            </div>
          </CarouselItem>
          <CarouselItem key={3} className="pl-0">
            <div className="relative w-full h-full">
              <Image
                src={'/slider_surgeon_3.webp'}
                fill
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={'Slider picture 3'}
                priority
              />
              <div className="slider-textblock-wrapper">
                <div className="slider-textblock">
                  <p className="slider-title">The Private Surgeon Clinic</p>
                  <p className="slider-description">{b('slide3')}</p>
                </div>
              </div>
              <div className="slider-overlay"></div>
            </div>
          </CarouselItem>
          <CarouselItem key={4} className="pl-0">
            <div className="relative w-full h-full">
              <Image
                src={'/slider_surgeon_4.jpg'}
                fill
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={'Slider picture 4'}
                priority
              />
              <div className="slider-textblock-wrapper">
                <div className="slider-textblock">
                  <p className="slider-title">The Private Surgeon Clinic</p>
                  <p className="slider-description">{b('slide4')}</p>
                </div>
              </div>
              <div className="slider-overlay"></div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-3 bg-main-header opacity-30 w-10 h-10 border-custom-darkgray" />
        <CarouselNext className="right-3 bg-main-header opacity-30 w-10 h-10 border-custom-darkgray  " />
      </Carousel>
    </>
  );
};

export default CarouselBanner;
