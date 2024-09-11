import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Tags = () => {
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      <h1 className='text-tertiary font-poppins font-semibold text-[24px] text-center'>
        Tag Clouds
      </h1>
      <div className=' my-3 flex justify-center'>
        <img src='/asset 40.svg' alt='' />
      </div>

      <div className='flex w-full pt-5 gap-3 flex-wrap items-center '>
        <Link href='/tags/Web Development'>
          <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
            #Web Development
          </Button>
        </Link>
        <Link href='/tags/Front End'>
          <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
            #Front End
          </Button>
        </Link>
        <Link href='/tags/Back End'>
          <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
            #Back End
          </Button>
        </Link>

        <Link href='/tags/Full Stack'>
          <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
            #Full Stack
          </Button>
        </Link>

        <Link href='/tags/Database'>
          <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
            #Database
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Tags;
