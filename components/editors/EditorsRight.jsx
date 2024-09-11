import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const EditorsRight = () => {
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl text-center'>
      <h1 className='text-3xl font-bold font-roboto text-tertiary'>
        Minhaj <span className='text-quaternary text-3xl'>.</span>
      </h1>
      <p className='py-5 font-roboto text-quinary tracking-wider'>
        Hello, We’re content writer who is fascinated by content fashion,
        celebrity and lifestyle. We helps clients bring the right content to the
        right people.
      </p>
      <div className='flex items-center justify-center gap-5'>
        <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
        <FaInstagram className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
        <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
        <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
      </div>
    </div>
  );
};

export default EditorsRight;
