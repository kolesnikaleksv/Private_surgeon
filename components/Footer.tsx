import React from 'react';
import LogoIcon from '@/components/icons/LogoIcon';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PhoneLink from '@/components/PhoneLink';
import SocialMediaGroup from './SocialMediaGroup';

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
            <PhoneLink />
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
              href="private-surgeon@gmail.com"
              className="horizontal-f items-center whitespace-nowrap gap-2 m-1  hover-underline"
            >
              <Mail size={20} />
              private-surgeon@gmail.com
            </Link>
          </div>
        </div>
        <div className="footer-bottom ">
          <div className="whitespace-nowrap">
            “Vladimyr Bubna”. {f('rights')}
          </div>
          <Link href={'/'}>{f('privacyPolicy')}</Link>
          <Link href={'/'}>{f('offerAgreement')}</Link>
          <SocialMediaGroup />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
