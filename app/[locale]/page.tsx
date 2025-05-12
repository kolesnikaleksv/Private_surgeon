import { Playfair_Display } from 'next/font/google';
import CarouselBanner from '@/components/CarouselBanner';
import FeedbackSlider from '@/components/FeedbackSlider';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Contacts from './contacts/page';
import ConsultationBlock from '@/components/ConstultationBlock';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Home = () => {
  const hp = useTranslations('HomePage');
  return (
    <>
      <section
        className={`w-full relative overflow-hidden mb-20 ${playfair.className}`}
      >
        <CarouselBanner />
      </section>
      <section>
        <div className="flex flex-col my-20 lg:grid grid-cols-12 gap-4 px-5 lg:px-0">
          <div className="mb-10 lg:mb-0 col-start-2 col-end-5">
            <h4 className="font-normal uppercase">{hp('welcomeTitle')}</h4>
          </div>
          <div className="col-start-5 col-end-12">
            <h3 className="mb-5">{hp('welcomeDescription')}</h3>
            <Button className="flex flex-row whitespace-nowrap justify-center min-w-3xs items-center py-1 px-4 rounded-xl bg-custom-darkgray text-white hover:text-main-gray border-black border-2">
              <Link href={`./about`}>{hp('welcomeButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-main-ultralight">
        <ConsultationBlock />
      </section>
      <section className="bg-main-ultralight">
        <div className="container py-20">
          <div className="relative mx-5 md:mx-15">
            <p className={`my-5 text-3xl ${playfair.className}`}>
              {hp('feedback')}:
            </p>
            <FeedbackSlider />
          </div>
        </div>
      </section>
      <section>
        <Contacts />
      </section>
    </>
  );
};

export default Home;
