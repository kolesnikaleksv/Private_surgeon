import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { Sparkle } from 'lucide-react';
import { Button } from './ui/button';

function DialogForm() {
  const h = useTranslations('Header');

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger className="flex flex-row whitespace-nowrap justify-center gap-2 items-baseline py-1 px-4 rounded-xl bg-black text-white hover:text-main-gray border-black border-2">
        {h('button')}
        <Sparkle size={10} />
      </DialogTrigger>
      <DialogContent className="bg-main">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogForm;
