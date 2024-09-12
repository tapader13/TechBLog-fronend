import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { Button } from '../ui/button';
import { getDate, getFirstImage, getFirstWords } from '@/lib/constant';

const LatestLeft = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Number of visible items
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getLatestPosts = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?specificCategory=latest`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const fetchedData = await res.json();
      setData(fetchedData);
      setIsLoading(false);
    };

    getLatestPosts();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const hasMoreItems = visibleCount < data.length;

  return (
    <div className='mt-8'>
      <h1 className='text-secondary font-poppins font-bold text-[24px]'>
        Latest Posts
      </h1>

      <div className='my-3'>
        <img src='/asset 40.svg' alt='' />
      </div>

      <div className='border border-[#ebebeb] p-5 rounded-xl mt-8'>
        {data &&
          data.slice(0, visibleCount).map((item) => (
            <div key={item._id || item.title}>
              <div className='grid sm:grid-cols-12 grid-cols-1 gap-5'>
                <div className='relative sm:col-span-5'>
                  <div className='relative group h-[260px] w-full rounded-xl overflow-hidden'>
                    <Image
                      src={getFirstImage(item.description) || '/asset 9.jpeg'}
                      alt='hero'
                      fill
                      className='group-hover:scale-110 transition-all duration-500'
                    />
                    <div className='absolute p-5 bottom-0 left-0 w-full h-full'>
                      <FaVideo className='p-[10px] h-10 w-10 bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300' />
                    </div>
                  </div>
                </div>
                <div className='sm:col-span-7'>
                  <div className='flex items-center flex-wrap gap-2 my-5'>
                    <div className='rounded-full overflow-hidden'>
                      <Image
                        src={'/asset 10.jpeg'}
                        alt=''
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                      Minhaj
                    </div>
                    <div className='text-quaternary pr-1 text-2xl relative'>
                      <p className='absolute -top-5 left-0'>.</p>
                    </div>
                    <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                      {item.category[0].slice(0, 1).toUpperCase() +
                        item.category[0].slice(1)}
                    </div>
                    <div className='text-quaternary pr-1 text-2xl relative'>
                      <p className='absolute -top-5 left-0'>.</p>
                    </div>
                    <div className='text-quinary font-roboto'>
                      {getDate(item.createdAt)}
                    </div>
                  </div>
                  <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
                    {item.title}
                  </h1>
                  <p className='text-quinary font-roboto my-4 tracking-wide'>
                    {getFirstWords(item.description)}
                  </p>
                </div>
              </div>
              <div className='border border-[#ebebeb] my-6' />
            </div>
          ))}
        <div className='flex justify-center'>
          <Button
            className='bg-transparent text-quinary font-roboto border border-senary px-10 py-3 hover:border-quaternary hover:text-quaternary transition-all duration-300'
            onClick={loadMore}
            disabled={!hasMoreItems || isLoading}
          >
            {isLoading
              ? 'Loading...'
              : hasMoreItems
              ? 'Load More'
              : 'No More Items'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestLeft;
