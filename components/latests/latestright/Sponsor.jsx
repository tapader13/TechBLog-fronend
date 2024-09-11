import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
  return (
    <div>
      <div className='my-8'>
        <h6 className='text-center mb-2 uppercase font-poppins text-quinary'>
          - Sponsored Ad -
        </h6>
        <div className='w-full h-[350px] relative'>
          <Image src={'/asset 30.png'} alt='' fill />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
