import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

function Portfolio() {
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
          <li className="startup_card group">
            <div className="flex my-2">6 March 2025</div>
            <div className="flex justify-between items-center mt-5 gap-5">
              <div className="flex-1 min-w-0">
                <Link href={`/drbubnastory`}>
                  <p className="font-medium text-[16px] text-black line-clamp-1">
                    Dr.Bubna
                  </p>
                </Link>
                <Link href={`/case/Osteoarthritis`}>
                  <h3 className="font-semibold text-[26px] text-black line-clamp-1 break-all">
                    Osteoarthritis
                  </h3>
                </Link>
              </div>
              <Link href={`/drbubnastory`}>
                <Image
                  src={'/avatar.png'}
                  alt={'Dr. Bubna'}
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ width: '48px', height: '48px' }}
                  priority
                  unoptimized
                />
              </Link>
            </div>
            <Link
              href={`/case/Osteoarthritis`}
              style={{ background: 'red', position: 'relative' }}
            >
              <p className="startup-card_desc">
                Osteoarthritis is the single most common cause of disability in
                older adults and the 2010 Global Burden of Disease Study
                estimated that 10% to 15% of all adults aged over 60 had some
                degree of symptomatic Osteoarthritis [1;2].
              </p>
              <div className="w-full h-[164px] relative">
                <Image
                  // src={'/osteoporosis.webp'}
                  src={'/osteoporosis_1.webp'}
                  alt={'osteoporosis'}
                  fill
                  className=" rounded-[10px] object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 764px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="flex justify-between items-center mt-5 gap-3">
              <Link href={`/category/Orthopaedics`}>
                <p className="font-medium text-[16px] text-black">
                  Orthopaedics
                </p>
              </Link>
              <Button className="statrup-card_btn" asChild>
                <Link href={`/case/Osteoarthritis`}>Details</Link>
              </Button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
