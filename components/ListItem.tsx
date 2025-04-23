import React from 'react';
import prisma from '@/lib/prisma';
import { AccordionContent } from '@/components/ui/accordion';
import DialogWithForm from './DialogWithForm';

type Props = {
  id: number;
};
const ListItem = async ({ id }: Props) => {
  const listItem = await prisma.item.findMany();

  return (
    <>
      {listItem.map((item) => {
        if (item.priceRefId === id) {
          return (
            <AccordionContent key={item.id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">{item.name}</div>
                <div className="flex justify-end gap-4 items-center">
                  <div className="flex">{item.price}</div>
                  <DialogWithForm hideForMobile={false} />
                </div>
              </div>
            </AccordionContent>
          );
        }
      })}
    </>
  );
};

export default ListItem;
