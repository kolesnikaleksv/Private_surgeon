import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import DialogWithForm from '@/components/DialogWithForm';
import { useTranslations } from 'next-intl';
import PriceList from '@/components/PriceList';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

function Prices() {
  const p = useTranslations('PricesPage');
  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-12 gap-6 my-12">
        <div className="col-start-2 col-end-6 my-10 lg:max-w-sm flex flex-col gap-10 justify-between px-5 lg:px-0">
          <h2 className={`font-normal ${playfair.className}`}>{p('title')}</h2>
          <p>
            {p('description1')}
            <br />
            {p('description2')}
          </p>
          <DialogWithForm hideForMobile={false} />
        </div>
        <div className="flex items-center justify-center col-start-6 col-end-13">
          <Image
            src={'/Screenshot_22.png'}
            width={600}
            height={300}
            style={{ height: 'auto', width: '100%' }}
            alt={'Our clinic'}
            priority
          />
        </div>
      </div>
      <div className="w-full xl:flex items-center my-12">
        <div className="mx-5 xl:mx-0 max-w-7xl bg-main p-10 rounded-2xl">
          <PriceList />
        </div>
      </div>
    </>
  );
}

export default Prices;
