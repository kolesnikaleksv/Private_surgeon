import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';

const ConsultationBlock = async () => {
  const locale = await getLocale();
  const cb = await getTranslations('ConsultationBlock');

  const image = locale === 'uk' ? '/messages_ua.png' : '/messages_en.png';

  return (
    <>
      <div className="w-full px-5 md:px-10 pt-20 container">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full">
          <div className="flex flex-col w-full md:max-w-1/2">
            <p className="text-3xl font-bold mb-10">{cb('title')}</p>
            <p className="text-xl my-2">{cb('descr1')}</p>
            <p className="text-xl my-2">{cb('descr2')}</p>
            <p className="text-xl my-2">{cb('descr3')}</p>
            <p className="text-xl my-2">{cb('descr4')}</p>
          </div>
          <div className="flex w-full md:w-1/2 relative">
            <Image
              src={'/smartphone_2.webp'}
              width={537}
              height={586}
              alt={'smartphone'}
              className="w-full h-auto"
            />
            <div className="absolute top-0 right-0 w-5/6">
              <Image
                src={image}
                width={435}
                height={232}
                alt="messages"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationBlock;
