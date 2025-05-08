import React from 'react';
import { articleEn } from '@/localDB/articleEn';

const PortfolioCase = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  console.log('ehs');
  const _id = (await params).id;
  const card = articleEn.find((item) => _id === item.id.toString());
  if (!card) {
    return <div>Not found</div>;
  }

  return <div>{card.title}</div>;
};

export default PortfolioCase;
