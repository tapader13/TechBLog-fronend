import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const HeroLeft = () => {
  return (
    <Link href={`/details/how-to-connect-mongodb-with-next-js-14`}>
      <div className='relative group min-h-[560px] w-full rounded-xl overflow-hidden '>
        <Image
          src={'/asset 18.jpeg'}
          alt='hero'
          fill
          className='group-hover:scale-110 transition-all duration-500'
        />
        <div className='absolute p-12 bottom-0 flex flex-col justify-end left-0 w-full h-full bg-tertiary/60 '>
          <Button>Inspiration</Button>
          <h1 className='text-white text-4xl font-bold my-5 font-poppins'>
            5 Easy Ways You Can Turn Future Into Success
          </h1>
          <div className='flex items-center gap-2 text-senary font-roboto'>
            <h4>Minhaj Tapadar</h4>
            <h4>.</h4>
            <h4>August 20, 2022</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroLeft;
