import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollBtn from './buttons/ScrollBtn';

const Footer = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex items-center justify-between py-8'>
        <div className='text-quinary font-roboto'>
          <h4>© 2023 Katen. Theme by ThemeGer.</h4>
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
