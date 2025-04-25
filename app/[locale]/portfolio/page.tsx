import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

function Porthpolio() {
  return (
    <>
      <div className="flex items-center min-h-100 w-full relative">
        <div className="absolute bg-black opacity-5 top-0 left-0 bottom-0 right-0 z-2"></div>
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <Image
            src={'/portfolioBanner.webp'}
            height={400}
            width={1200}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: '89% 45%',
            }}
            alt={'Our clinic'}
            priority
          />
        </div>
        <div className="max-w-full md:max-w-2/5 z-3 md:my-10 md:mx-20">
          <div
            className={`flex flex-col text-white gap-5 m-10 ${playfair.className}`}
          >
            <h1>Orthopaedics Care & Surgery</h1>
            <h3>
              For over 20 years, our mission has been to offer you the safest,
              most effective cosmetic treatments and procedures.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Porthpolio;
