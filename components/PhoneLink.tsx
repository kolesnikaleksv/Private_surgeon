import { Phone } from 'lucide-react';
import { Prosto_One } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

type TPhoneLink = {
  className?: string;
};

const PhoneLink: React.FC<TPhoneLink> = ({ className = 'flex' }) => {
  return (
    <Link
      href={'tel:+380662077434'}
      className={`flex-row gap-2 hover-underline items-center underline-offset-2 whitespace-nowrap ${prosto_one.className} ${className}`}
    >
      <Phone size={20} />
      +38 (097) 504 54 42
    </Link>
  );
};

export default PhoneLink;
