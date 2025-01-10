import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
  return (
    <div className='my-8'>
      <h6 className='text-center mb-2 uppercase font-poppins text-quinary'>
        - Sponsored Ad -
      </h6>
      <div className='w-full overflow-hidden rounded-lg h-[140px] relative'>
        <Image src={'/Untitled-2.png'} alt='' fill />
      </div>
    </div>
  );
};

export default Sponsor;
