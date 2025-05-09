import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import MobileNav from '@/components/MobileNav';
import SelectLanguage from '@/components/SelectLanguage';
import DialogWithForm from '@/components/DialogWithForm';
import LogoIconBlack from '@/components/icons/LogoIconBlack';
import PhoneLink from '@/components/PhoneLink';

function Navbar() {
  const t = useTranslations('NavbarLinks');
  const hideForMobile = true;

  return (
    <header className="px-3 py-2.5 backdrop-blur-sm sm:p-2.5 w-full fixed bg-main-header z-100">
      <div className="container flex justify-between items-center">
        <div className=" header-left flex flex-row items-center gap-6 ">
          <Link href={'./'}>
            <LogoIconBlack className="h-8 xs:h-10 sm:h-14" />
          </Link>

          <nav className="hidden xl:flex flex-row gap-5 text-sm">
            <Link href={`/`}>{t('home')}</Link>
            <Link href={`/about`}>{t('about')}</Link>
            <Link href={'/prices'}>{t('prices')}</Link>
            <Link href={'/contacts'}>{t('contacts')}</Link>
            <Link href={'/portfolio'}>{t('portfolio')}</Link>
          </nav>
        </div>
        <div className="header-right flex flex-row gap-5 items-center">
          <SelectLanguage />
          <PhoneLink className="hidden xl:flex" />
          <DialogWithForm hideForMobile={hideForMobile} />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
