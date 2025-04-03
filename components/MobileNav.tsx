import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Prosto_One } from 'next/font/google';
import { Button } from './ui/button';
import {
  AlignJustify,
  BriefcaseBusiness,
  Building2,
  FileBadge,
  House,
  Phone,
  UserPen,
} from 'lucide-react';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function MobileNav() {
  const t = useTranslations('NavbarLinks');
  const h = useTranslations('Header');
  return (
    <div className="lg:hidden bg-main">
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={40} />
        </SheetTrigger>
        <SheetContent className="bg-main p-5">
          <SheetTitle>
            <Image
              src="/logo_4.png"
              height={50}
              width={200}
              alt="Private surgeon logo"
            />
          </SheetTitle>

          <Link
            href={'tel:+380662077434'}
            className={`flex flex-row gap-2 hover:underline items-center underline-offset-2 whitespace-nowrap ${prosto_one.className}`}
          >
            <Phone size={20} />
            +38 (097) 504 54 42
          </Link>
          <SheetDescription>Choose a page</SheetDescription>
          <nav className="flex flex-col mt-6 gap-5 text-sm ">
            <SheetClose asChild>
              <Link href={`./`} className="adamantine">
                <House size={20} />
                {t('home')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={`./about`} className="adamantine">
                <Building2 size={20} />
                {t('about')}{' '}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'./prices'} className="adamantine">
                <FileBadge size={20} />
                {t('prices')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'./contacts'} className="adamantine">
                <UserPen size={20} />
                {t('contacts')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'./portfolio'} className="adamantine">
                <BriefcaseBusiness size={20} />
                {t('portfolio')}
              </Link>
            </SheetClose>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                className="bg-black text-white hover:text-black border-black border-2"
                variant="secondary"
              >
                {h('button')} +
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
