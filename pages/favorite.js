import { Breadcamp } from '@/components/Breadcamp';
import RightPart from '@/components/parts/RightPart';
import React from 'react';
import FavLeft from './favleft';

const Favorite = () => {
  return (
    <div>
      <div className='bg-septenary flex flex-col justify-center items-center min-h-[200px]'>
        <h1 className='font-roboto font-semibold text-3xl text-tertiary '>
          #{'favorite'}
        </h1>
        <Breadcamp title={'Favorite'} />
      </div>
      <div className='sm:w-[80%] w-full mx-auto'>
        <div className='grid sm:grid-cols-12 grid-cols-1 gap-5 mt-10'>
          <div className='sm:col-span-8'>
            <FavLeft title={'Favorite'} />
          </div>
          <div className='sm:col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
