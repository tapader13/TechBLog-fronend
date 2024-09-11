import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { getDate, getFirstImage } from '@/lib/constant';

const HeroRight = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('recent');
  const handleData = async (value) => {
    const res = await fetch(
      `https://blog-frnt.vercel.app/api/blogapi?specificCategory=${value}`
    );
    if (!res.ok) {
      // throw new Error(`Error: ${res.status} ${res.statusText}`);
      console.log(res);
    }
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    handleData(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className='p-5  border border-[#ebebeb] rounded-xl'>
      <div className='flex justify-between gap-5'>
        <Button
          onClick={() => setSelectedCategory('popular')}
          className={`${
            selectedCategory === 'popular'
              ? 'bg-senary-gradient text-white'
              : 'bg-transparent text-quinary'
          } text-[16px] font-medium px-12 py-[10px] shadow-none border`}
        >
          Popular
        </Button>
        <Button
          onClick={() => setSelectedCategory('recent')}
          className={`${
            selectedCategory === 'recent'
              ? 'bg-senary-gradient text-white'
              : 'bg-transparent text-quinary'
          } text-[16px] font-medium px-12 py-[10px] shadow-none border`}
        >
          Recent
        </Button>
      </div>
      <div>
        {data.slice(0, 4).map((item, i) => {
          return (
            <div
              key={i}
              className='grid grid-cols-12 gap-4 py-5 border-b border-[#ebebeb]'
            >
              <div className='col-span-3 w-[70px] relative h-[70px] overflow-hidden rounded-full'>
                <Image
                  fill
                  src={getFirstImage(item.description) || '/asset 6.jpeg'}
                  alt=''
                  className=' hover:scale-110 h-full w-full cursor-pointer transition-all duration-300'
                />
              </div>
              <div className='col-span-9'>
                <h3 className='text-tertiary font-poppins font-bold text-[18px] hover:text-quaternary transition-all duration-300 cursor-pointer'>
                  {item.title}
                </h3>
                <p className='font-roboto text-quinary'>
                  {getDate(item.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className='grid grid-cols-12 gap-4 py-5 border-b border-[#ebebeb]'>
        <div className='col-span-3 w-[70px] relative h-[70px] overflow-hidden rounded-full'>
          <Image
            src={'/asset 6.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-9'>
          <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
            60 Things To Immediately Do About Building
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 py-5 border-b border-[#ebebeb]'>
        <div className='col-span-3 w-[70px] relative h-[70px] overflow-hidden rounded-full'>
          <Image
            src={'/asset 6.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-9'>
          <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
            60 Things To Immediately Do About Building
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 py-5 '>
        <div className='col-span-3 w-[70px] relative h-[70px] overflow-hidden rounded-full'>
          <Image
            src={'/asset 6.jpeg'}
            alt=''
            fill
            className=' hover:scale-110 cursor-pointer transition-all duration-300'
          />
        </div>
        <div className='col-span-9'>
          <h3 className='text-tertiary hover:text-quaternary transition-all duration-300 font-poppins font-bold text-[18px] cursor-pointer'>
            60 Things To Immediately Do About Building
          </h3>
          <p className='font-roboto text-quinary'>August 23, 2022</p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroRight;
