import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SelectLanguage from './SelectLanguage';
import { Prosto_One } from 'next/font/google';
import { useTranslations } from 'next-intl';
import MobileNav from './MobileNav';
import { Phone } from 'lucide-react';
import DialogForm from './DialogForm';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function Navbar() {
  const t = useTranslations('NavbarLinks');

  return (
    <header className="p-5 w-full flex justify-between items-center bg-main">
      <div className=" header-left flex flex-row items-center gap-6">
        <Link href={'./'}>
          <Image
            src="/logo_4.png"
            height={50}
            width={200}
            alt="Private surgeon logo"
          />
        </Link>
        <nav className="hidden lg:flex flex-row gap-5 text-sm">
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
          className={`hidden lg:flex flex-row items-center gap-2 hover:underline underline-offset-2 whitespace-nowrap ${prosto_one.className}`}
        >
          <Phone size={20} />
          +38 (097) 504 54 42
        </Link>
        <DialogForm />
      </div>
      <MobileNav />
    </header>
  );
}

export default Navbar;
