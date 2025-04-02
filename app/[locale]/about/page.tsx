import React from 'react';
import { useTranslations } from 'next-intl';

const About = () => {
  const title = useTranslations('HomePage');
  return (
    <>
      <h1>{title('title')}</h1>
      <div>About our company {title('about')}</div>
    </>
  );
};

export default About;
