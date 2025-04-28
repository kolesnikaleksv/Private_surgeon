import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import PortfolioCard from '@/components/PortfolioCard';
import { articleEn, CardData } from '@/localDB/articleEn';
import { getLocale } from 'next-intl/server';
import { articleDe } from '@/localDB/articleDe';
import { articleUk } from '@/localDB/articleUk';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Portfolio = async () => {
  const locale = await getLocale();

  let portfolioCards: CardData[] = articleEn;
  if (locale === 'de') {
    portfolioCards = articleDe;
  } else if (locale === 'uk') {
    portfolioCards = articleUk;
  } else {
    portfolioCards = articleEn;
  }

  return (
    <>
      <section className="flex items-center min-h-100 w-full relative">
        <div className="absolute bg-black opacity-5 top-0 left-0 bottom-0 right-0 z-2"></div>
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <Image
            src={'/portfolioBanner.webp'}
            fill
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
      </section>
      <section className="max-w-7xl mx-5 my-10 xl:mx-auto">
        <div className="flex flex-col w-full gap-4 md:p-10">
          <p>
            Our team of specialised Orthopaedic surgeons offer private
            orthopaedic care focusing on minimally invasive treatments for
            problems caused by disease and injury in the bones and joints.
          </p>
          <p>
            We only offer treatments and procedures we know we can promise and
            deliver patients the best possible care from our world-renowned,
            experienced medical team of surgeons, doctors, nurses, technical
            assistants and therapists.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-10 px-6">
        <h2>Приклади профeсійної роботи</h2>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-7">
          {portfolioCards.map((item) => {
            return <PortfolioCard key={item.id} data={item} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
