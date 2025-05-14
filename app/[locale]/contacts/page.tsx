import React from 'react';
// import Link from 'next/link';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import PhoneLink from '@/components/PhoneLink';
import SocialMediaGroup from '@/components/SocialMediaGroup';

function Contacts() {
  const c = useTranslations('ContactPage');

  return (
    <div className="container px-3 my-20">
      <div className="wrapper w-full p-5 flex flex-col md:flex-row gap-4 bg-main-ultralight rounded-2xl">
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <p className="text-2xl">{c('clinic')}</p>
          <h1>{c('title')}</h1>
          <p className="color-custom-gray">{c('phone')}</p>
          <PhoneLink />
          <div className="border-b border-custom-gray w-10"></div>
          <p className="color-custom-gray">{c('addressTitle')}</p>
          <Link
            href={'https://maps.app.goo.gl/pUbUn9c7Ljqt4n7s6'}
            className="hover-underline"
          >
            {c('address')}
          </Link>
          <div className="border-b border-custom-gray w-10"></div>
          <p className="color-custom-gray">{c('schedule')}</p>
          <h3>
            {c('scheduleWeek')} <br /> {c('scheduleSut')}
          </h3>
          <div className="border-b border-custom-gray w-10"></div>
          <p className="color-custom-gray">{c('email')}</p>
          <Link
            href="private-surgeon@gmail.com"
            className="whitespace-nowrap  hover-underline"
          >
            private-surgeon@gmail.com
          </Link>
          <div className="border-b border-custom-gray w-10"></div>

          <SocialMediaGroup />
        </div>
        <div className="map-wrapper flex-1 min-w-0 w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.4706189524636!2d35.015397!3d48.46879130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2ffa410df77%3A0x45ad6679d9ded0fc!2z0L_RgNC-0YHQvy4g0JvQtdGB0ZYg0KPQutGA0LDRl9C90LrQuCwgMjYsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e1!3m2!1suk!2sua!4v1744281403873!5m2!1suk!2sua"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full min-h-[320px] rounded-2xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
