import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '../ui/button';
import { getDate, getFirstImage } from '@/lib/constant';

export const Inspiration = () => {
  const [emblaRef] = useEmblaCarousel();
  const [data, setData] = useState([]);
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
    getCelebration('inspiration');
  }, []);
  return (
    <div className='mt-8'>
      <h1 className='text-secondary font-poppins font-bold text-[24px]'>
        Inspiration
      </h1>

      <div className='mt-3 mb-8'>
        <img src='/asset 40.svg' alt='' />
      </div>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container '>
          {/* Slide 1 */}
          {data &&
            data.map((item) => {
              return (
                <div key={item.title} className=' embla__slide  p-2'>
                  <div className='relative group min-h-[300px] rounded-xl overflow-hidden'>
                    <Image
                      src={getFirstImage(item.description) || '/asset 21.jpeg'}
                      alt='hero'
                      fill
                      className='group-hover:scale-110 transition-all duration-500'
                    />
                    <div className='absolute p-5 bottom-0 flex flex-col justify-end left-0 w-full h-full bg-tertiary/60'>
                      <Button>Politic</Button>
                      <h1 className='text-white text-2xl font-bold my-5 font-poppins'>
                        {item.title.slice(0, 1).toUpperCase() +
                          item.title.slice(1)}
                      </h1>
                      <div className='flex items-center gap-2 text-senary font-roboto'>
                        <h4>Minhaj Tapadar</h4>
                        <h4>.</h4>
                        <h4>{getDate(item.createdAt)}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Slide 2 */}
          {/* <div className='embla__slide1  p-2'>
            <div className='relative group min-h-[300px] rounded-xl overflow-hidden'>
              <Image
                src={'/asset 22.jpeg'}
                alt='hero'
                fill
                className='group-hover:scale-110 transition-all duration-500'
              />
              <div className='absolute p-5 bottom-0 flex flex-col justify-end left-0 w-full h-full bg-tertiary/60'>
                <Button>Culture</Button>
                <h1 className='text-white text-2xl font-bold my-5 font-poppins'>
                  Feel Like A Pro With The Help Of These 7 Tips
                </h1>
                <div className='flex items-center gap-2 text-senary font-roboto'>
                  <h4>Minhaj Tapadar</h4>
                  <h4>.</h4>
                  <h4>August 20, 2022</h4>
                </div>
              </div>
            </div>
          </div> */}

          {/* Slide 3 */}
          {/* <div className='embla__slide1  p-2'>
            <div className='relative group  min-h-[300px] rounded-xl overflow-hidden'>
              <Image
                src={'/asset 23.jpeg'}
                alt='hero'
                fill
                className='group-hover:scale-110 transition-all duration-500'
              />
              <div className='absolute p-5 bottom-0 flex flex-col justify-end left-0 w-full h-full bg-tertiary/60'>
                <Button>Culture</Button>
                <h1 className='text-white text-2xl font-bold my-5 font-poppins'>
                  Feel Like A Pro With The Help Of These 7 Tips
                </h1>
                <div className='flex items-center gap-2 text-senary font-roboto'>
                  <h4>Minhaj Tapadar</h4>
                  <h4>.</h4>
                  <h4>August 20, 2022</h4>
                </div>
              </div>
            </div>
          </div> */}

          {/* Add more slides if needed */}
        </div>
      </div>
    </div>
  );
};
