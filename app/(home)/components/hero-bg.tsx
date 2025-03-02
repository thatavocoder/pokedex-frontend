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
          width: 'clamp(200px, 50vw, 500px)',
        },
        {
          left: 40,
          top: 5,
          width: 'clamp(300px, 60vw, 600px)',
        },
        {
          left: 20,
          top: 60,
          width: 'clamp(150px, 35vw, 350px)',
        },
        {
          left: 75,
          top: 75,
          width: 'clamp(200px, 40vw, 400px)',
        },
        {
          left: 90,
          top: -10,
          width: 'clamp(150px, 30vw, 300px)',
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
            width: width,
          }}
          unoptimized
          draggable={false}
        />
      ))}
    </div>
  );
};

export default HeroBg;
