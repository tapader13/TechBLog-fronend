import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import { getFirstImage, getDate, getFirstWords } from '@/lib/constant';

const TagLeft = ({ title }) => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCat = async (value) => {
      try {
        const res = await fetch(
          `https://blog-frnt.vercel.app/api/blogapi?tag=${value}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCat(title);
  }, [title]);
  console.log(data, 'tag');
  // Function to load more items
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 2); // Load 2 more items
      setLoading(false);
    }, 500); // Simulate a small delay for loading
  };

  return (
    <div className='border border-[#ebebeb] p-5 rounded-xl'>
      {data &&
        data.slice(0, visibleItems).map((item) => (
          <div key={item._id}>
            <div className='grid grid-cols-12 gap-5'>
              <div className='relative col-span-5'>
                <div className='relative group h-[240px] w-full rounded-xl overflow-hidden '>
                  <Image
                    src={getFirstImage(item.description) || '/asset 9.jpeg'}
                    alt='hero'
                    fill
                    className='group-hover:scale-110 transition-all duration-500'
                  />
                  <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                    <FaVideo className='p-[10px] h-10 w-10  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300' />
                  </div>
                </div>
              </div>
              <div className='col-span-7'>
                <div className='flex items-center flex-wrap justify-center gap-2 my-5'>
                  <div className='rounded-full overflow-hidden'>
                    <Image
                      src={'/asset 10.jpeg'}
                      alt=''
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                    Minhaj Tapader
                  </div>
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                    {title === 'Web Development' ? 'Web Dev' : title}
                  </div>
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  <div className='text-quinary font-roboto'>
                    {getDate(item.createdAt)}
                  </div>
                </div>
                <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
                  {item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
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
          className='bg-transparent text-quinary font-roboto border border-senary px-10 py-3  hover:border-quaternary hover:text-quaternary transition-all duration-300'
          onClick={loadMore}
          disabled={visibleItems >= data.length || loading}
        >
          {loading
            ? 'Loading...'
            : visibleItems >= data.length
            ? 'No More Items'
            : 'Load More'}
        </Button>
      </div>
    </div>
  );
};

export default TagLeft;
