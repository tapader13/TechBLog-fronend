import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
const Explore = () => {
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      <h1 className='text-tertiary font-poppins font-semibold text-[24px] text-center'>
        Explore Topic
      </h1>
      <div className=' mt-3 mb-8 flex justify-center'>
        <img src='/asset 40.svg' alt='' />
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <Link href={`/category/JavaScript`}>
            <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
              JavaScript
            </h2>
          </Link>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            React
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Node.js
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Python
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            HTML
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            CSS
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            MongoDB
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Express
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Next.js
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Tailwind
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
      <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            TypeScript
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div>
    </div>
  );
};

export default Explore;
