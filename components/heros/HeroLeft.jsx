import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import useBlogStore from '@/store/useBlogStore';
import { getDate, getFirstImage } from '@/lib/constant';

const HeroLeft = () => {
  const { singleBlog } = useBlogStore();
  return (
    <Link href={`/details/${singleBlog[0]?.title}`}>
      <div className='relative group min-h-[560px] w-full rounded-xl overflow-hidden '>
        <Image
          src={'https://i.postimg.cc/FHsszw1C/image.jpg'}
          alt='hero'
          fill
          className='group-hover:scale-110 transition-all duration-500'
        />
        <div className='absolute p-12 bottom-0 flex flex-col justify-end left-0 w-full h-full bg-tertiary/60 '>
          <Button>{singleBlog[0]?.category}</Button>
          <h1 className='text-white text-4xl font-bold my-5 font-poppins'>
            {singleBlog[0]?.title}
          </h1>
          <div className='flex items-center gap-2 text-senary font-roboto'>
            <h4>Minhaj Tapadar</h4>
            <h4>.</h4>
            <h4>{getDate(singleBlog[0]?.createdAt)}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroLeft;
