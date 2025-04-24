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
    <div className="w-full">
      <h1>{t('title')}</h1>
      <Accordion type="single" collapsible>
        {data.map((category) => (
          <AccordionItem key={category.id} value={`${category.id}`}>
            <AccordionTrigger>{category.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row w-full">
                <div className="flex flex-1/2 justify-center">
                  Назва послуги
                </div>
                <div className="flex flex-1/2 justify-end mr-[250px]">ціна</div>
              </div>
              {category.items.map((item) => (
                <div key={item.id} className="p-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">{item.name}</div>
                    <div className="flex justify-end gap-4 items-center">
                      <div className="flex">
                        {`${item.price} ${t('currency')}`}
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
