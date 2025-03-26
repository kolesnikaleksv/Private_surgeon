import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordeon';

const Accordeon = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="bg-avocado-200">
        <AccordionTrigger className="bg-avocado-100">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-avocado-200">
        <AccordionTrigger className="bg-avocado-100">
          asdfasdfa
        </AccordionTrigger>
        <AccordionContent className="bg-amber-600">
          Yes. It adhereasdfasda asdf asdf
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordeon;
