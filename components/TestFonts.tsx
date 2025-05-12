import React from 'react';
import {
  IBM_Plex_Sans,
  Inter,
  Lato,
  Prosto_One,
  Source_Sans_3,
} from 'next/font/google';

import { Playfair_Display } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], display: 'swap' });
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
const sourceSans = Source_Sans_3({ subsets: ['latin'], display: 'swap' });
const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
const prosto_one = Prosto_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const TestFonts = () => {
  return (
    <div className="m-5 flex flex-col gap-3">
      TestFonts Componet
      <h1 className={`s ${playfair.className}`}>About The Private Surgeon</h1>
      <h1 className={libre.className}>About The Private Surgeon</h1>
      <h1 className={cormorant.className}>About The Private Surgeon</h1>
      <h1 className={inter.className}>About The Private Surgeon</h1>
      <h1 className={lato.className}>About The Private Surgeon</h1>
      <h1 className={sourceSans.className}>About The Private Surgeon</h1>
      <h1 className={ibmPlex.className}>About The Private Surgeon</h1>
      <h1 className={prosto_one.className}>About The Private Surgeon</h1>
    </div>
  );
};

export default TestFonts;
