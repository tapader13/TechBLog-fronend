import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getDate, getFirstImage } from '@/lib/constant';

const TrandingBottom = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEditorPick = async (value) => {
      const res = await fetch(
        `http://localhost:3001/api/blogapi?specificCategory=${value}`
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
    <div className='grid grid-cols-2 grid-rows-2 gap-x-10'>
      {data &&
        data.length >= 4 &&
        data.slice(2, 6).map((item) => {
          return (
            <div
              key={item.title}
              className='grid grid-cols-12 gap-4 pt-5 border-t border-[#ebebeb]'
            >
              <div className='col-span-4 rounded-lg w-full relative h-[80px] overflow-hidden '>
                <Image
                  src={getFirstImage(data[0].description) || '/asset 12.jpeg'}
                  alt=''
                  fill
                  className=' hover:scale-110 cursor-pointer transition-all duration-300'
                />
              </div>
              <div className='col-span-8'>
                <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
                  {item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
                </h3>
                <p className='font-roboto text-quinary'>
                  {getDate(item.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
      {/* <div className='grid grid-cols-12 gap-4 pt-5 border-t border-[#ebebeb]'>
        <div className='col-span-4 rounded-lg w-full relative h-[80px] overflow-hidden '>
          <Image
            src={'/asset 12.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-8'>
          <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
            Here Are 8 Ways To Success Faster
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 py-5 border-t border-[#ebebeb]'>
        <div className='col-span-4 rounded-lg w-full relative h-[80px] overflow-hidden '>
          <Image
            src={'/asset 14.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-8'>
          <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
            Here Are 8 Ways To Success Faster
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div>{' '}
      <div className='grid grid-cols-12 gap-4 py-5 border-t border-[#ebebeb]'>
        <div className='col-span-4 rounded-lg w-full relative h-[80px] overflow-hidden '>
          <Image
            src={'/asset 13.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-8'>
          <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
            Here Are 8 Ways To Success Faster
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div> */}
    </div>
  );
};

export default TrandingBottom;
