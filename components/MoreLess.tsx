'use client';

import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const MoreLess = ({
  text,
  swiperRef,
}: {
  text: string;
  swiperRef: React.RefObject<SwiperType | null>;
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpaded = () => {
    setExpanded(!expanded);
    setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 100);
  };
  return (
    <div
      className={`flex flex-col justify-between ${
        expanded ? 'h-auto' : 'h-28'
      }`}
    >
      <div className={` ${!expanded ? 'line-clamp-3 break-all' : null}`}>
        {text}
      </div>
      {text.length > 100 ? (
        <span
          className="size-fit text-custom-gray py-1 mt-2 cursor-pointer hover:underline underline-offset-2"
          onClick={toggleExpaded}
        >
          {expanded ? 'Less' : 'More'}
        </span>
      ) : null}
    </div>
  );
};

export default MoreLess;
