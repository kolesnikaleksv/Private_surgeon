import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getLocale, getTranslations } from 'next-intl/server';
import DialogWithForm from '@/components/DialogWithForm';
import { priceDe } from '@/localDB/priceDe';
import { priceEn } from '@/localDB/priceEn';
import { priceUk } from '@/localDB/priceUk';

const PriceList = async () => {
  const locale = await getLocale();
  console.log(locale);
  const t = await getTranslations('PricePage');

  let data = priceEn;
  if (locale === 'de') {
    data = priceDe;
  } else if (locale === 'uk') {
    data = priceUk;
  } else {
    data = priceEn;
  }

  return (
    <div className="w-full text-custom-darkgray">
      <h1>{t('accordionTitle')}</h1>
      <Accordion type="single" collapsible>
        {data.map((category) => (
          <AccordionItem key={category.id} value={`${category.id}`}>
            <AccordionTrigger className="text-xl font-medium ">
              {category.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="hidden md:flex flex-row w-full p-2 ">
                <div className="flex flex-1/2 justify-center">
                  {t('services')}
                </div>
                <div className="flex flex-1/2 justify-end mr-[240px]">
                  {t('cost')}
                </div>
              </div>
              {category.items.map((item) => (
                <div key={item.id} className="text-sm md:text-base ml-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center py-2 border-custom-gray border-t-1">
                    <div className="flex w-full md:items-center mb-2 md:mb-0">
                      {item.name}
                    </div>
                    <div className="flex w-full justify-between md:justify-end gap-2 sm:gap-4 items-center">
                      <div className="flex flex-row flex-nowrap gap-2 items-center">
                        {item.price}
                        <sub>{t('currency')}</sub>
                      </div>
                      <DialogWithForm hideForMobile={false} />
                    </div>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PriceList;
