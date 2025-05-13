'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { Sparkle } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';

const DialogWithForm = (props: { hideForMobile: boolean }) => {
  const h = useTranslations('Header');
  const [open, setOpen] = React.useState(false);
  const dialog = useTranslations('Dialog');
  const { hideForMobile } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`${
          hideForMobile ? 'hidden md:flex' : 'flex'
        } flex-row whitespace-nowrap justify-center max-w-xs gap-2 items-baseline py-1 px-4 rounded-xl bg-custom-black text-white hover:text-main-gray border-black border-2`}
      >
        {h('button')}
        <Sparkle size={10} />
      </DialogTrigger>
      <DialogContent className="bg-main">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {dialog('title')}
          </DialogTitle>
          <DialogDescription>{dialog('description')}</DialogDescription>
        </DialogHeader>
        <ConsultationForm closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogWithForm;
