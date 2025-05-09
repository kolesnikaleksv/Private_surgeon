import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { CardData } from '@/localDB/articleEn';

const PortfolioCard = ({ data }: { data: CardData }) => {
  const {
    id,
    date,
    author,
    title,
    avatarImg,
    articleImg,
    category,
    description,
  } = data;

  return (
    <li className="startup_card group">
      <div className="flex my-2">{date}</div>
      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1 min-w-0">
          <Link href={`/drbubnastory`}>
            <p className="font-medium text-[16px] text-black line-clamp-1">
              {author}
            </p>
          </Link>
          <Link href={`/portfolio/${id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1 break-all">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/drbubnastory`}>
          <Image
            src={avatarImg}
            alt={author}
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
        href={`/portfolio/${id}`}
        style={{ background: 'red', position: 'relative' }}
      >
        <p className="startup-card_desc">{description}</p>
        <div className="w-full h-[164px] relative">
          <Image
            src={articleImg}
            alt={title}
            fill
            className=" rounded-[10px] object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 764px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center mt-5 gap-3">
        <Link href={`/portfolio/${id}`}>
          <p className="font-medium text-[16px] text-black">{category}</p>
        </Link>
        <Button className="statrup-card_btn" asChild>
          <Link href={`/portfolio/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default PortfolioCard;
