import React from 'react';
import { useTranslations } from 'next-intl';
import ColorFadeCanvas from '@/components/Canvas';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const About = () => {
  const a = useTranslations('AboutPage');
  return (
    <>
      <div className={`relative h-80 ${playfair.className}`}>
        <div className="absolute bottom-30 left-10">
          <h1
            className={`font-normal text-custom-darkgray ${playfair.className}`}
          >
            {a('title')}
          </h1>
        </div>
        <ColorFadeCanvas />
      </div>
      <div className="flex flex-col lg:grid grid-cols-12 gap-4 py-20 px-5 lg:px-0 bg-main-ultralight border-b border-main-gray">
        <div className="mb-10 lg:mb-0 col-start-2 col-end-5">
          <h4 className="font-normal uppercase">welcome</h4>
        </div>
        <div className="col-start-5 col-end-12">
          <h3 className="mb-5">
            The best medical experts know that treating the physical is only one
            part of the healing process. That’s why, at The Private Clinic, we
            care for the mind and spirit, too.{' '}
          </h3>
          <h3 className="mb-5">
            Established by pioneering surgeons, The Private Clinic delivers
            minimally invasive procedures using the latest technology and
            techniques. Here, you’ll find the perfect mix of scientific rigour
            and human warmth. It’s what makes us a world-class private
            healthcare facility.{' '}
          </h3>
          <h3 className="mb-5">
            Our exceptional medical experts are at the top of their respective
            fields and are all dedicated to ensuring you get the best care and
            attention through your healing journey.{' '}
          </h3>
          <h3 className="mb-5">We believe that’s no less than you deserve.</h3>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-20 px-5 lg:px-0 bg-main-ultralight">
        <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-4">
          <div className="col-start-2 col-end-6 my-10 lg:max-w-sm flex flex-col gap-10 lg:gap-30 justify-between">
            <h2 className={`font-normal uppercase ${playfair.className}`}>
              Our equipment
            </h2>
            <p>
              Our state-of-the-art equipment blends cutting-edge technology with
              practical functionality – it’s the kind of setup that inspires
              confidence. Every device is selected for precision and
              reliability, supporting accurate diagnostics and effective
              treatment. With comfort and efficiency in mind, our tools help
              create a smooth, reassuring experience for every patient.
            </p>
          </div>
          <div className="flex items-center justify-center col-start-7 col-end-13">
            <Image
              src={'/Screenshot_20.png'}
              width={600}
              height={300}
              style={{ height: 'auto', width: '100%' }}
              alt={'Our clinic'}
              className="rounded-t-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-12 gap-4">
          <div className=" col-start-2 col-end-7">
            <Image
              src={'/Screenshot_21.png'}
              width={600}
              height={300}
              style={{ height: 'auto', width: '100%' }}
              alt={'Our clinic'}
            />
          </div>
          <div className="col-start-8 col-end-12 flex flex-col py-10 gap-10 lg:gap-20 justify-between ">
            <h2 className={`font-normal uppercase ${playfair.className}`}>
              Our clinic
            </h2>
            <p>
              Our beautifully designed clinic combines the best of both
              modernity and functionality – it’s the doctor’s office you
              actually want to visit. You’ll find warm, welcoming spaces as well
              as discreet and comfortable consulting rooms, where we work
              together to find you the best treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-5 md:block relative mx-5 md:mx-0 md:p-10 lg:p-30">
        <div className="flex flex-col md:grid grid-cols-12">
          <div className="md:col-start-1 md:col-end-8 lg:col-start-1 lg:col-end-6 flex flex-col gap-5 md:text-white relative z-10">
            <h2 className={`mb-10 font-normal ${playfair.className}`}>
              Dr. Volodymyr Bubna
            </h2>
            <p>
              Throughout 25 years of public and private practice experience, Dr
              Volodymyr Bubna has been committed to providing Ukrainians with
              the gold standard of care. To Dr Bubna, that means treating more
              than just the physical – a belief that led him to establish The
              Private Clinic.
            </p>
            <Button className="bg-transparent text-2xl p-5 rounded-3xl border-white border-2 hover:bg-white hover:text-black">
              <Link href={'/drbubnastory'}>Read Dr. Bubna&apos;s story</Link>
            </Button>
          </div>
        </div>
        <Image
          src={'/backgroun_dark.PNG'}
          alt={'Dr. background'}
          width={1000}
          height={300}
          className="md:absolute right-0 bottom-0 left-0 top-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default About;
