'use client';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectPortal } from '@radix-ui/react-select';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

function SelectLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const path = pathname.split('/').slice(2).join('/');
    router.replace(`/${newLocale}/${path}`);
  };
  return (
    <Select onValueChange={switchLanguage}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          position="popper"
          className="dropdown-content-width-fullelectContent bg-main z-101"
        >
          {routing.locales.map((selectItem) => (
            <SelectItem key={selectItem} value={selectItem}>
              {selectItem}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

export default SelectLanguage;
