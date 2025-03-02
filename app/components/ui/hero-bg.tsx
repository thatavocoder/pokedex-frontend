import Image from 'next/image';
import React from 'react';

type Props = {};

const HeroBg = (props: Props) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
      {[
        {
          left: -10,
          top: 0,
          width: 500,
        },
        {
          left: 40,
          top: 5,
          width: 600,
        },
        {
          left: 20,
          top: 60,
          width: 350,
        },
        {
          left: 75,
          top: 75,
          width: 400,
        },
        {
          left: 90,
          top: -10,
          width: 300,
        },
      ].map(({ left, top, width }, i) => (
        <Image
          key={i}
          src="/pokeball.png"
          alt="pokeball"
          width={700}
          height={700}
          className="absolute opacity-10 h-auto overflow-hidden z-0 select-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}px`,
          }}
          unoptimized
          draggable={false}
        />
      ))}
    </div>
  );
};

export default HeroBg;
