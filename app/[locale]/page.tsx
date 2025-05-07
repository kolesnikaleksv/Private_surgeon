import { Playfair_Display } from 'next/font/google';
import CarouselBanner from '@/components/CarouselBanner';
import FeedbackSlider from '@/components/FeedbackSlider';
import { useTranslations } from 'next-intl';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Home = () => {
  const h = useTranslations('HomePage');
  return (
    <>
      <section
        className={`w-full relative overflow-hidden mb-10 ${playfair.className}`}
      >
        <CarouselBanner />
      </section>
      <section className="bg-main-ultralight">
        <div className="container py-10">
          <div className="relative mx-5 md:mx-15">
            <p className={`my-5 text-3xl ${playfair.className}`}>
              {h('feedback')}:
            </p>
            <FeedbackSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
