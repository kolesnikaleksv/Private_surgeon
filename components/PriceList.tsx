import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import prisma from '@/lib/prisma';
import ListItem from '@/components/ListItem';

const PriceList = async () => {
  const categories = await prisma.price.findMany();

  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        {categories.map((category) => (
          <AccordionItem key={category.id} value={`${category.id}`}>
            <AccordionTrigger>{category.title}</AccordionTrigger>
            <ListItem id={category.id} />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PriceList;
