import { Breadcamp } from '@/components/Breadcamp';
import RightPart from '@/components/parts/RightPart';
import { Button } from '@/components/ui/button';
import { getDate, getFirstImage, getFirstWords } from '@/lib/constant';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaVideo } from 'react-icons/fa';

const SearchPage = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const { q } = router.query;
  useEffect(() => {
    const getCelebration = async (value) => {
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?title=${value}`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setData(data);
    };
    getCelebration(q);
  }, [q]);
  return (
    <div>
      <div>
        <div className='bg-septenary flex flex-col justify-center items-center min-h-[200px]'>
          <h1 className='font-roboto font-semibold text-3xl text-tertiary '>
            Search results for: {q}
          </h1>
          <Breadcamp
            title={'Search results for'.concat(' "').concat(q).concat('"')}
          />
        </div>
        <div className='sm:w-[80%] w-full mx-auto'>
          <div className='grid sm:grid-cols-12 grid-cols-1 gap-5 mt-10 '>
            <div className='sm:col-span-8'>
              {data &&
                data.map((item) => {
                  return (
                    <div className='border p-2 sm:p-0 border-[#ebebeb] rounded-xl'>
                      <div className='relative'>
                        <div className='relative group h-[220px] sm:h-[420px] w-full rounded-xl overflow-hidden '>
                          <Image
                            src={
                              getFirstImage(item.description) || '/asset 9.jpeg'
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
                        <div className='absolute p-5 -bottom-10 right-0'>
                          <img
                            src={getFirstImage(item.description)}
                            className='p-[5px] h-12 w-12  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300'
                          />
                        </div>
                      </div>
                      <div className='flex items-center flex-wrap sm:px-10 gap-2 my-5 '>
                        <div className='rounded-full overflow-hidden'>
                          <Image
                            src={'/msg-4064874077-2204 (1).jpg'}
                            alt=''
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className='text-quinary font-roboto '>
                          Minhaj Tapader
                        </div>
                        <div className='text-quaternary pr-1 text-2xl relative'>
                          <p className='absolute -top-5  left-0'>.</p>
                        </div>
                        <div className='text-quinary font-roboto'>
                          {getDate(item.createdAt)}
                        </div>
                      </div>
                      <h1 className='text-tertiary sm:px-10 font-poppins hover:text-quaternary transition-all duration-300 font-bold text-3xl cursor-pointer'>
                        {item.title}
                      </h1>
                      <p className='text-quinary font-roboto my-4 tracking-wide sm:px-10 mb-10'>
                        {getFirstWords(item.description)}
                      </p>
                      <div className='border mx-10 border-[#ebebeb] ' />
                      <div className='text-right sm:px-10 my-6 group'>
                        <Link href={`/details/${item.title}`}>
                          <Button className='bg-transparent text-tertiary font-roboto font-semibold shadow-none text-xl'>
                            Continue reading
                            <span className='text-quinary font-roboto font-semibold text-xl group-hover:translate-x-2 transition-all duration-300 mt-[6px]'>
                              {' '}
                              <FaAngleRight />
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className='sm:col-span-4'>
              <RightPart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
