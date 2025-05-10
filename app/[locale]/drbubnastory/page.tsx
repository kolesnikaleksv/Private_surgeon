import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TelegramIcon from '@/components/icons/TelegramIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import PortfolioCard from '@/components/PortfolioCard';
import { getLocale } from 'next-intl/server';
import { articleEn, type CardData } from '@/localDB/articleEn';
import { articleDe } from '@/localDB/articleDe';
import { articleUk } from '@/localDB/articleUk';

const page = async () => {
  const locale = await getLocale();

  let portfolioCards: CardData[] = articleEn;
  if (locale === 'de') {
    portfolioCards = articleDe;
  } else if (locale === 'uk') {
    portfolioCards = articleUk;
  } else {
    portfolioCards = articleEn;
  }
  const cards = portfolioCards.filter(
    (item) => item.author === 'Д-р Бубна' || item.author === 'Dr. Bubna'
  );
  return (
    <>
      <div className="flex flex-col md:flex-row w-full  min-h-screen">
        <div className="flex flex-col gap-4 items-center w-full md:max-w-85 min-w-[300px] bg-main-header py-20 px-5">
          <Image
            src={'/bubna.jpg'}
            alt={'Dr.Bubna'}
            width={200}
            height={350}
            className="rounded-3xl"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <p>Doctor of Medicine</p>
          <h2>Bubna Volodymyr</h2>
          <p>Founder & CEO</p>
          <div className="flex flex-col w-full i gap-3 mt-10">
            <h2>Company</h2>
            <p>The private surgeon</p>
            <h2>Follow me</h2>
            <ul className="text-custom-gray">
              <li>
                <Link
                  target="_blank"
                  href={'https://web.telegram.org/k/'}
                  className="flex flex-row gap-2 my-2"
                >
                  <TelegramIcon className="w-6 h-6" /> Dr.Bubna
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={'https://www.facebook.com/'}
                  className="flex flex-row gap-2 my-2"
                >
                  <FacebookIcon className="w-6 h-6" /> Subscribe
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/'}
                  className="flex flex-row gap-2 my-2"
                >
                  <InstagramIcon className="w-6 h-6" /> Follow
                </Link>
              </li>
            </ul>
            <h2>Medical Expertise</h2>
            <ul className="text-custom-gray uppercase">
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                traumatology
              </li>
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                hand surgery
              </li>
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                plastic surery
              </li>
            </ul>
            <h2>Favorite Tools</h2>
            <ul className="text-custom-gray uppercase">
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                Sculpel
              </li>
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                forceps
              </li>
              <li className="my-1 bg-main w-fit py-1 px-2 rounded-sm">
                Bovie Medical
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 bg-main-ultralight w-full py-10 md:py-20 px-5 md:pl-10 md:pr-0">
          <h1>About</h1>
          <h4>
            Volodymyr Bubna is a distinguished trauma and hand surgeon with over
            two decades of hands-on medical experience, known for his precision,
            dedication, and patient-centered approach to care. A leading figure
            in his field, Dr. Bubna has successfully treated thousands of
            patients, ranging from acute trauma cases to complex reconstructive
            procedures.
          </h4>
          <h4>
            With expertise spanning traumatology, hand surgery, and general
            surgery, Dr. Bubna combines deep clinical knowledge with the latest
            surgical techniques to ensure optimal outcomes. His work is grounded
            in evidence-based medicine, yet driven by empathy and a tireless
            commitment to advancing patient well-being.
          </h4>
          <h4>
            Beyond the operating room, Volodymyr Bubna actively contributes to
            medical education and surgical innovation. He collaborates with
            institutions and mentors young physicians, continuously raising the
            standards of care.
          </h4>
          <h4>
            Recognized by peers and patients alike, Dr. Bubna brings together
            skill, experience, and integrity—hallmarks of a truly exceptional
            surgeon.
          </h4>
          <div>
            <h2>Articles</h2>
            <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-7 md:mr-10">
              {cards.map((item) => {
                return <PortfolioCard key={item.id} data={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
