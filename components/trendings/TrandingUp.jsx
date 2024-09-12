import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { FaVideo, FaHeadphones } from 'react-icons/fa';
import { getDate, getFirstImage, getFirstWords } from '@/lib/constant';

const TrandingUp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEditorPick = async (value) => {
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?specificCategory=${value}`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setData(data);
    };
    getEditorPick('trending');
  }, []);
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
      {data.length >= 2 && (
        <>
          <div>
            <div className='relative'>
              <div className='relative group h-[260px] w-full rounded-xl overflow-hidden '>
                <Image
                  src={getFirstImage(data[0].description) || '/asset 9.jpeg'}
                  alt='hero'
                  fill
                  className='group-hover:scale-110 transition-all duration-500'
                />
                <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                  <Button>
                    {data[0].category[0].slice(0, 1).toUpperCase() +
                      data[0].category[0].slice(1)}
                  </Button>
                </div>
              </div>
              <div className='absolute p-5 -bottom-10 right-0'>
                <FaVideo className='p-[10px] h-12 w-12  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300' />
              </div>
            </div>
            <div className='flex items-center gap-2 my-5'>
              <div className='rounded-full overflow-hidden'>
                <Image src={'/asset 10.jpeg'} alt='' width={40} height={40} />
              </div>
              <div className='text-quinary font-roboto '>Minhaj Tapader</div>
              <div className='text-quaternary pr-1 text-2xl relative'>
                <p className='absolute -top-5  left-0'>.</p>
              </div>
              <div className='text-quinary font-roboto'>
                {' '}
                {getDate(data[0].createdAt)}
              </div>
            </div>
            <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
              {data[0].title.slice(0, 1).toUpperCase() + data[0].title.slice(1)}
            </h1>
            <p className='text-quinary font-roboto my-4 tracking-wide'>
              {getFirstWords(data[0].description)}
            </p>
          </div>
          <div>
            <div className='relative'>
              <div className='relative group h-[260px] w-full rounded-xl overflow-hidden '>
                <Image
                  src={getFirstImage(data[1].description) || '/asset 9.jpeg'}
                  alt='hero'
                  fill
                  className='group-hover:scale-110 transition-all duration-500'
                />
                <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                  <Button>
                    {data[1].category[0].slice(0, 1).toUpperCase() +
                      data[1].category[0].slice(1)}
                  </Button>
                </div>
              </div>
              <div className='absolute p-5 -bottom-10 right-0'>
                <FaHeadphones className='p-[10px] h-12 w-12  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300' />
              </div>
            </div>
            <div className='flex items-center gap-2 my-5'>
              <div className='rounded-full overflow-hidden'>
                <Image src={'/asset 10.jpeg'} alt='' width={40} height={40} />
              </div>
              <div className='text-quinary font-roboto '>Minhaj Tapader</div>
              <div className='text-quaternary pr-1 text-2xl relative'>
                <p className='absolute -top-5  left-0'>.</p>
              </div>
              <div className='text-quinary font-roboto'>
                {getDate(data[1].createdAt)}
              </div>
            </div>
            <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
              {data[1].title.slice(0, 1).toUpperCase() + data[1].title.slice(1)}
            </h1>
            <p className='text-quinary font-roboto my-4 tracking-wide'>
              {getFirstWords(data[1].description)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default TrandingUp;
