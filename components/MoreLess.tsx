'use client';

import React, { useState } from 'react';

const MoreLess = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpaded = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div
        className={`overflow-hidden ${
          expanded ? 'h-auto' : 'line-clamp-3 break-all'
        }`}
      >
        {text}
      </div>
      {text.length > 40 ? (
        <span
          className="size-fit text-custom-gray py-1 mt-2 cursor-pointer hover:underline underline-offset-2"
          onClick={toggleExpaded}
        >
          {expanded ? 'Less' : 'More'}
        </span>
      ) : null}
    </>
  );
};

export default MoreLess;
