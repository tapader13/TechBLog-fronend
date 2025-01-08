import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollBtn from './buttons/ScrollBtn';

const Footer = () => {
  return (
    <div className='sm:w-[80%] w-full mx-auto'>
      <div className='flex flex-col sm:flex-row gap-5 items-center justify-between  py-8'>
        <div className='text-quinary font-roboto'>
          <h4>© {new Date().getFullYear()}. All rights reserved.</h4>
        </div>
        <div className='flex items-center gap-5'>
          <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaInstagram className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
        </div>
        <div>
          <ScrollBtn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
