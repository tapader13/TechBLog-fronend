import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const EditorsRight = () => {
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl text-center'>
      <h1 className='text-3xl font-bold font-roboto text-tertiary'>
        Minhaj <span className='text-quaternary text-3xl'>.</span>
      </h1>
      <p className='py-5 font-roboto text-quinary tracking-wider'>
        Hello, we’re tech enthusiasts who are passionate about innovation,
        software development, and digital transformation. We help clients
        harness the power of technology by creating robust applications,
        designing intuitive user interfaces, and building scalable backend
        systems. Our expertise ensures that the right solutions meet the right
        needs.
      </p>
      <div className='flex items-center justify-center gap-5'>
        <a
          href='https://www.facebook.com/muhammad.minhaj.799316'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
        </a>
        <a
          href='https://www.linkedin.com/in/minhaj-uddin-5b1a20338/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
        </a>
        <a
          href='https://x.com/MinhajTapader'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
        </a>
      </div>
    </div>
  );
};

export default EditorsRight;
