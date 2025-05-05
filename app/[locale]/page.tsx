import { Playfair_Display } from 'next/font/google';
import CarouselBanner from '@/components/CarouselBanner';
import FeedbackSlider from '@/components/FeedbackSlider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Home = () => {
  return (
    <>
      <section
        className={`w-full relative overflow-hidden mb-10 ${playfair.className}`}
      >
        <CarouselBanner />
      </section>
      <section className="container my-10">
        <div className="mx-5 min-w-0">
          <FeedbackSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
