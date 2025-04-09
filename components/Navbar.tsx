import React from 'react';
import Link from 'next/link';
import { Prosto_One } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { Phone } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import SelectLanguage from '@/components/SelectLanguage';
import DialogWithForm from '@/components/DialogWithForm';
import LogoIconBlack from '@/components/icons/LogoIconBlack';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function Navbar() {
  const t = useTranslations('NavbarLinks');
  const hideForMobile = true;

  return (
    <header className="p-3 sm:p-5 w-full  bg-main">
      <div className="container flex justify-between items-center">
        <div className=" header-left flex flex-row items-center gap-6 ">
          <Link href={'./'}>
            <LogoIconBlack className="h-10 sm:h-14" />
          </Link>

          <nav className="hidden xl:flex flex-row gap-5 text-sm">
            <Link href={`./`}>{t('home')}</Link>
            <Link href={`./about`}>{t('about')}</Link>
            <Link href={'./prices'}>{t('prices')}</Link>
            <Link href={'./contacts'}>{t('contacts')}</Link>
            <Link href={'./portfolio'}>{t('portfolio')}</Link>
          </nav>
        </div>
        <div className="header-right flex flex-row gap-5 items-center">
          <SelectLanguage />
          <Link
            href={'tel:+380662077434'}
            className={`hidden xl:flex flex-row items-center gap-2 hover:underline underline-offset-2 whitespace-nowrap ${prosto_one.className}`}
          >
            <Phone size={20} />
            +38 (097) 504 54 42
          </Link>
          <DialogWithForm hideForMobile={hideForMobile} />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
