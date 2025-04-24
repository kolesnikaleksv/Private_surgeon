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
  const t = await getTranslations('AboutPage');

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
            {category.items.map((item) => (
              <AccordionContent key={item.id}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">{item.name}</div>
                  <div className="flex justify-end gap-4 items-center">
                    <div className="flex">{item.price} грн</div>
                    <DialogWithForm hideForMobile={false} />
                  </div>
                </div>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PriceList;
