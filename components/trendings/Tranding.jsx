import React from 'react';
import TrandingUp from './TrandingUp';
import TrandingBottom from './TrandingBottom';

const Tranding = () => {
  return (
    <div>
      <h1 className='text-secondary font-poppins font-bold text-[24px]'>
        Trending
      </h1>

      <div className=' my-3'>
        <img src='/asset 40.svg' alt='' />
      </div>
      <div className='border mt-8 border-[#ebebeb] rounded-xl p-5'>
        <TrandingUp />
        <TrandingBottom />
      </div>
    </div>
  );
};

export default Tranding;
