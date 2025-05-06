import React from 'react';
import Image from 'next/image';
import MoreLess from '@/components/MoreLess';
import { TFeebackCard } from '@/localDB/feedbackCardsEn';
import type { Swiper as SwiperType } from 'swiper';

const FeedbackCard = ({
  item,
  swiperRef,
}: {
  item: TFeebackCard;
  swiperRef: React.RefObject<SwiperType | null>;
}) => {
  const { image, name, date, description, stars } = item;
  return (
    <div className="flex flex-col shadow-100 p-5 rounded-lg bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Image
            src={image}
            width={48}
            height={48}
            alt={'Margo'}
            style={{ width: '48px', height: '48px' }}
            className="rounded-full mr-5"
          />
          <div className="flex flex-col justify-around">
            <p className="font-bold line-clamp-1 break-all">{name}</p>
            <p className="text-xs opacity-50">{date}</p>
          </div>
        </div>
        <Image
          src={'https://cdn.trustindex.io/assets/platform/Google/icon.svg'}
          alt={'google icon'}
          height={27}
          width={27}
          style={{ height: '30px', width: '30px' }}
          className="mb-4 ml-1"
        />
      </div>
      <div className="flex flex-row gap-1 p5 my-4">
        {Array.from({ length: stars }).map((_, index) => (
          <Image
            key={index}
            src={'/star24.png'}
            width={20}
            height={20}
            alt={'star'}
          />
        ))}
      </div>
      <MoreLess text={description} swiperRef={swiperRef} />
    </div>
  );
};

export default FeedbackCard;
