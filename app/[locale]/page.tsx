import CarouselBanner from '@/components/CarouselBanner';
import { Playfair_Display } from 'next/font/google';

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
    </>
  );
};

export default Home;
