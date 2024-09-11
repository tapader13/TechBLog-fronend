import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { getDate, getFirstImage, getFirstWords } from '@/lib/constant';
import Link from 'next/link';

const EditorLeft = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getEditorPick = async (value) => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/blogapi?specificCategory=${value}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getEditorPick('editorpick');
  }, []);

  return (
    <div className='mt-14 '>
      <h1 className='text-secondary font-poppins font-bold text-[24px]'>
        Editor&apos;s Pick
      </h1>

      <div className='my-3'>
        <img src='/asset 40.svg' alt='' />
      </div>

      <div className='grid mt-10 grid-cols-2 gap-5 p-5 border border-[#ebebeb] rounded-xl'>
        <div>
          <div className='relative group h-[260px] w-full rounded-xl overflow-hidden'>
            {data.length > 0 && (
              <Image
                src={getFirstImage(data[0].description) || '/asset 9.jpeg'}
                alt='hero'
                fill
                className='group-hover:scale-110 transition-all duration-500'
              />
            )}
            <div className='absolute p-5 bottom-0 left-0 w-full h-full'>
              {data.length > 0 && (
                <Button>
                  {data[0].category[0].slice(0, 1).toUpperCase() +
                    data[0].category[0].slice(1)}
                </Button>
              )}
            </div>
          </div>

          <div className='flex items-center gap-2 my-5'>
            <div className='rounded-full overflow-hidden'>
              <Image src='/asset 10.jpeg' alt='' width={40} height={40} />
            </div>
            <div className='text-quinary font-roboto'>Minhaj Tapader</div>
            <div className='text-quaternary pr-1 text-2xl relative'>
              <p className='absolute -top-5 left-0'>.</p>
            </div>
            <div className='text-quinary font-roboto'>
              {data.length > 0 && getDate(data[0].createdAt)}
            </div>
          </div>

          {data.length > 0 && (
            <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
              {data[0].title.slice(0, 1).toUpperCase() + data[0].title.slice(1)}
            </h1>
          )}

          {data.length > 0 && (
            <p className='text-quinary font-roboto my-4 tracking-wide'>
              {getFirstWords(data[0].description)}
            </p>
          )}
        </div>

        <div className='flex flex-col justify-between'>
          {data.length > 1 &&
            data.slice(1, 5).map((item) => {
              return (
                <Link href={`details/${item.title}`}>
                  <div
                    key={item.title}
                    className='grid grid-cols-12 gap-4 pb-5 border-b border-[#ebebeb]'
                  >
                    <div className='col-span-4 rounded-lg w-full relative h-[80px] overflow-hidden'>
                      <Image
                        src={
                          getFirstImage(item.description) || '/asset 12.jpeg'
                        }
                        alt=''
                        fill
                        className='hover:scale-110 cursor-pointer transition-all duration-300'
                      />
                    </div>
                    <div className='col-span-8'>
                      <h3 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-[18px] cursor-pointer'>
                        {item.title}
                      </h3>
                      <p className='font-roboto text-quinary'>
                        {getDate(item.createdAt)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EditorLeft;
