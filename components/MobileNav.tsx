import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
// import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import {
  AlignJustify,
  BriefcaseBusiness,
  Building2,
  FileBadge,
  House,
  UserPen,
} from 'lucide-react';
import DialogWithForm from '@/components/DialogWithForm';
import LogoIconBlack from '@/components/icons/LogoIconBlack';
import PhoneLink from '@/components/PhoneLink';

function MobileNav() {
  const t = useTranslations('NavbarLinks');
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={40} />
        </SheetTrigger>
        <SheetContent className="bg-main p-5">
          <SheetTitle>
            <Link href={'/'}>
              <LogoIconBlack className="h-10 sm:h-14" />
            </Link>
          </SheetTitle>
          <PhoneLink />
          <SheetDescription>Choose a page</SheetDescription>
          <nav className="flex flex-col mt-6 gap-5 text-sm ">
            <SheetClose asChild>
              <Link href={`/`} className="adamantine">
                <House size={20} />

                {t('home')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={`/about`} className="adamantine">
                <Building2 size={20} />
                {t('about')}{' '}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/prices'} className="adamantine">
                <FileBadge size={20} />
                {t('prices')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/contacts'} className="adamantine">
                <UserPen size={20} />
                {t('contacts')}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/portfolio'} className="adamantine">
                <BriefcaseBusiness size={20} />
                {t('portfolio')}
              </Link>
            </SheetClose>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <DialogWithForm hideForMobile={false} />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
