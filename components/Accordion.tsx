import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDownIcon } from 'lucide-react';

const ManeAccordion = () => {
  return (
    <Accordion orientation="vertical" type="multiple">
      <AccordionItem value="item-1" className="bg-avocado-200">
        <AccordionTrigger
          data-orientation="vertical"
          className="bg-avocado-100"
        >
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

      <AccordionItem value="item-3" className="bg-avocado-200">
        <AccordionTrigger className="AccordionTrigger green text-white">
          <span>asdfasdfa</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </AccordionTrigger>
        <AccordionContent className="bg-amber-600">
          Yes. It adhereasdfasda asdf asdf
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ManeAccordion;
