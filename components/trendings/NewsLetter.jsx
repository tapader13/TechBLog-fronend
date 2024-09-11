import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const NewsLetter = () => {
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      <h1 className='text-tertiary font-poppins font-semibold text-[24px] text-center'>
        Newsletter
      </h1>
      <div className=' my-3 flex justify-center'>
        <img src='/asset 40.svg' alt='' />
      </div>
      <h6 className='text-center my-6 text-tertiary font-bold'>
        Join 70,000 subscribers!
      </h6>
      <div className='flex w-full gap-3 flex-col max-w-sm items-center space-x-2'>
        <Input type='email' placeholder='Email address...' />
        <Button className='w-full h-10' type='submit'>
          Sign Up
        </Button>
      </div>
      <p className='text-center text-quinary my-3 text-sm'>
        By signing up, you agree to our{' '}
        <span className='text-quaternary'>Privacy Policy</span>
      </p>
      {/* <div className='flex border-t items-center justify-between border-[#ebebeb] py-3'>
        <div className='flex items-center gap-2'>
          <span className='text-quaternary'>
            <FaAngleRight />
          </span>{' '}
          <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
            Celebration
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
            Celebration
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
            Celebration
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
            Newsletter
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
            Celebration
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
            Celebration
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
            Celebration
          </h2>
        </div>
        <div className='font-roboto text-quinary'>(2)</div>
      </div> */}
    </div>
  );
};

export default NewsLetter;
