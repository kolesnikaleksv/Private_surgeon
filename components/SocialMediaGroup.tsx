import Link from 'next/link';
import React from 'react';
import TelegramIcon from '@/components/icons/TelegramIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { useTranslations } from 'next-intl';

const SocialMediaGroup = () => {
  const s = useTranslations('SocialMediaGroup');
  return (
    <div className="social-media-group">
      {s('socialMedia')}
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
  );
};

export default SocialMediaGroup;
