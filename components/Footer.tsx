import React from 'react';
import FacebookIcon from '@/components/icons/FacebookIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LogoIcon from '@/components/icons/LogoIcon';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Prosto_One } from 'next/font/google';
import { useTranslations } from 'next-intl';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  const t = useTranslations('NavbarLinks');
  const f = useTranslations('Footer');

  return (
    <footer className="w-full pt-11 pb-4 px-3 sm:px-5 rounded-t-3xl  text-white bg-custom-black">
      <div className="container flex flex-col">
        <div className="footer-head">
          <div className="footer-logo">
            <Link href={'/'}>
              <LogoIcon className="h-10 sm:h-14" />
            </Link>
          </div>
          <div className="flex flex-row justify-around gap-2 w-full md:flex-col sm:gap-1">
            <Link className="hover-underline" href={`./`}>
              {t('home')}
            </Link>
            <Link className="hover-underline" href={`./about`}>
              {t('about')}
            </Link>
            <Link className="hover-underline" href={'./prices'}>
              {t('prices')}
            </Link>
            <Link className="hover-underline" href={'./portfolio'}>
              {t('portfolio')}
            </Link>
          </div>
          <div className="vertical-f">
            <Link
              href={'tel:+380662077434'}
              className={`flex flex-row gap-2 hover-underline items-center underline-offset-2 whitespace-nowrap ${prosto_one.className}`}
            >
              <Phone size={20} />
              +38 (097) 504 54 42
            </Link>
          </div>
          <div className="vertical-f">
            <Link
              href={'https://maps.app.goo.gl/pUbUn9c7Ljqt4n7s6'}
              className="horizontal-f items-center gap-2 m-1 hover-underline"
              target="_blank"
            >
              <MapPin size={20} />
              {f('city')}
              <br />
              {f('street')}
            </Link>
            <Link
              href="privat-surgeon@gmail.com"
              className="horizontal-f items-center whitespace-nowrap gap-2 m-1  hover-underline"
            >
              <Mail size={20} />
              privat-surgeon@gmail.com
            </Link>
          </div>
        </div>
        <div className="footer-bottom ">
          <div className="whitespace-nowrap">
            “Vladimyr Bubna”. {f('rights')}
          </div>
          <Link href={'/'}>{f('privacyPolicy')}</Link>
          <Link href={'/'}>{f('offerAgreement')}</Link>
          <div className="footer-social">
            {f('socialMedia')}
            <Link target="_blank" href={'https://web.telegram.org/k/'}>
              <TelegramIcon className="w-6 h-6" />
            </Link>
            <Link target="_blank" href={'https://www.facebook.com/'}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link target="_blank" href={'https://www.instagram.com/'}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
