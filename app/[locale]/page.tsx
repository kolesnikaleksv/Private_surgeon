import { Playfair_Display } from 'next/font/google';
import CarouselBanner from '@/components/CarouselBanner';
import FeedbackCard from '@/components/FeedbackCard';
import { feedbackCardsEn } from '@/localDB/feedbackCardsEn';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Home = () => {
  const feedbackCards = feedbackCardsEn;

  return (
    <>
      <section
        className={`w-full relative overflow-hidden mb-10 ${playfair.className}`}
      >
        <CarouselBanner />
      </section>
      <section className="container my-10">
        <div className="mx-5 flex flex-row overflow-hidden gap-2">
          {feedbackCards.map((item) => {
            return <FeedbackCard key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
