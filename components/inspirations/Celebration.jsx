import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { getDate, getFirstImage } from '@/lib/constant';
import Link from 'next/link';
export const Celebration = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [data, setData] = useState([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    const getCelebration = async (value) => {
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?specificCategory=${value}`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setData(data);
    };
    getCelebration('celebration');
  }, []);
  console.log(data, 'cele');
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      {' '}
      <h1 className='text-tertiary font-poppins font-semibold text-[24px] text-center'>
        Celebration
      </h1>
      <div className=' mt-3 flex justify-center'>
        <img src='/asset 40.svg' alt='' />
      </div>
      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {data &&
              data.slice(0, 2).map((item) => {
                return (
                  <Link key={item._id} href={`/details/${item.title}`}>
                    <div key={item.title} className='embla__slide1'>
                      <div className='relative mt-10 group h-[240px] w-full rounded-xl overflow-hidden '>
                        <Image
                          src={
                            getFirstImage(item.description) || '/asset 29.jpeg'
                          }
                          alt='hero'
                          fill
                          className='group-hover:scale-110 transition-all duration-500'
                        />
                        <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                          <Button>
                            {' '}
                            {item.category[0].slice(0, 1).toUpperCase() +
                              item.category[0].slice(1)}
                          </Button>
                        </div>
                      </div>
                      <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-xl my-4 cursor-pointer'>
                        {item.title.slice(0, 1).toUpperCase() +
                          item.title.slice(1)}
                      </h1>
                      <div className='flex text-sm items-center gap-2 text-quinary font-roboto'>
                        <h4>Minhaj Tapadar</h4>
                        <h4>.</h4>
                        <h4> {getDate(item.createdAt)}</h4>
                      </div>
                    </div>
                  </Link>
                );
              })}
            {/* <div className='embla__slide'>
              <div className='relative mt-10 group h-[240px] w-full rounded-xl overflow-hidden '>
                <Image
                  src={'/asset 23.jpeg'}
                  alt='hero'
                  fill
                  className='group-hover:scale-110 transition-all duration-500'
                />
                <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                  <Button>Inspiration</Button>
                </div>
              </div>
              <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-xl my-4 cursor-pointer'>
                Want To Have A More Appealing Tattoo?
              </h1>
              <div className='flex text-sm items-center gap-2 text-quinary font-roboto'>
                <h4>Minhaj Tapadar</h4>
                <h4>.</h4>
                <h4>August 20, 2022</h4>
              </div>
            </div> */}
          </div>
        </div>
        <div className='flex mt-5 justify-center items-center gap-2'>
          <Button
            className='embla__prev bg-transparent text-quinary h-10 w-10 hover:text-quaternary hover:border hover:border-quaternary'
            onClick={scrollPrev}
          >
            <FaAngleLeft />
          </Button>
          <Button
            className='embla__next bg-transparent text-quinary h-10 w-10 hover:text-quaternary hover:border hover:border-quaternary'
            onClick={scrollNext}
          >
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
