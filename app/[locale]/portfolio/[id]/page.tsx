import React from 'react';
import { articleEn } from '@/localDB/articleEn';
import Image from 'next/image';
// import Link from 'next/link';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import { articleDe } from '@/localDB/articleDe';
import { articleUk } from '@/localDB/articleUk';
import PortfolioCard from '@/components/PortfolioCard';

const PortfolioCase = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const pc = await getTranslations('PortfolioCase');
  const locale = await getLocale();
  const _id = (await params).id;
  setRequestLocale(locale);
  const chooseLanguage = () => {
    switch (locale) {
      case 'en':
        return articleEn;
        break;
      case 'de':
        return articleDe;
        break;
      case 'uk':
        return articleUk;
        break;
      default:
        throw new Error("I can't choose the language");
    }
  };
  const card = chooseLanguage().find((item) => _id === item.id.toString());
  const sameCategory = chooseLanguage().filter(
    (item) => card?.category === item.category && item.id.toString() !== _id
  );

  if (!card) {
    return <div>Not found</div>;
  }

  return (
    <>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <Image
          src={card?.articleImg}
          alt="thumbnail"
          width={800}
          height={500}
          className="w-full h-auto rounded-xl"
          priority
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/user/${'later'}`}
              className="flex flex-col items-start md:flex-row gap-4 md:items-center mb-3"
            >
              <Image
                src={card?.avatarImg}
                width={64}
                height={64}
                alt="avatar"
                className="rounded-full drop-shadow-lg"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
              <p className="font-medium text-[20px] text-black">
                {card?.author}
              </p>
              <p className="font-medium text-[16px] text-custom-darkgray">
                Date: {card?.date}
              </p>
            </Link>
            <p className="font-medium text-[16px] bg-main-header px-4 py-2 rounded-full text-center">
              {card?.category}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: card.article }} />
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-10 px-6">
        <h2>{pc('sameCaterogy')} :</h2>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-7">
          {sameCategory.length ? (
            sameCategory.map((item) => {
              return <PortfolioCard key={item.id} data={item} />;
            })
          ) : (
            <div>{pc('alternative')}</div>
          )}
        </ul>
      </section>
      <div className="flex justify-center items-center">
        <Link href={'/portfolio'} className="mb-15">
          <Button className="rounded-2xl cursor-pointer">
            {pc('buttonBack')}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PortfolioCase;
