import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import CarouselBanner from '@/components/CarouselBanner';
import MoreLess from '@/components/MoreLess';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Home = () => {
  const descritpion: string =
    'Клиника очень хорошая.травматолог-ортопед Бубна Владимир Михайлович доктор высочайшего класса,профессионал в своём деле и Человек с большой буквы. Оперировал мужа три месяца назад (эндопртезирование тазобедренных суставов обоих конечностей).Былидо во многих клиниках,консультировались со многими докторами,но побывав на приёме у Владимир Михайловича-доверились сразу без каких либо колебаний. Спасибо огромное вам и всей вашей команде.';
  return (
    <>
      <section
        className={`w-full relative overflow-hidden mb-10 ${playfair.className}`}
      >
        <CarouselBanner />
      </section>
      <section className="container my-10">
        <div className="mx-5 flex flex-row">
          <div className="flex flex-col w-1/4 shadow-100 p-5 rounded-lg">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <Image
                  src={'/noavatar.gif'}
                  width={48}
                  height={48}
                  alt={'Margo'}
                  style={{ width: '48px', height: '48px' }}
                  className="rounded-full mr-5"
                />
                <div className="flex flex-col justify-around">
                  <p className="font-bold">Любка Островская</p>
                  <p className="text-xs opacity-50">12.30.2024</p>
                </div>
              </div>
              <Image
                src={
                  'https://cdn.trustindex.io/assets/platform/Google/icon.svg'
                }
                alt={'google icon'}
                height={30}
                width={30}
                style={{ height: '30px', width: '30px' }}
                className="mb-4"
              />
            </div>
            <div className="flex flex-row gap-1 p5 my-4">
              <Image src={'/star24.png'} width={20} height={20} alt={'star'} />
              <Image src={'/star24.png'} width={20} height={20} alt={'star'} />
              <Image src={'/star24.png'} width={20} height={20} alt={'star'} />
              <Image src={'/star24.png'} width={20} height={20} alt={'star'} />
              <Image src={'/star24.png'} width={20} height={20} alt={'star'} />
            </div>
            <MoreLess text={descritpion} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
