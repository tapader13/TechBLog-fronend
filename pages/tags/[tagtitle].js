import { Breadcamp } from '@/components/Breadcamp';
import RightPart from '@/components/parts/RightPart';
import TagLeft from '@/components/parts/TagLeft';
import { useRouter } from 'next/router';
import React from 'react';

const Tags = () => {
  const router = useRouter();
  const { tagtitle } = router.query;
  const title = tagtitle
    ? tagtitle.slice(0, 1).toUpperCase() + tagtitle.slice(1)
    : '';
  return (
    <div>
      <div className='bg-septenary flex flex-col justify-center items-center min-h-[200px]'>
        <h1 className='font-roboto font-semibold text-3xl text-tertiary '>
          #{title}
        </h1>
        <Breadcamp title={title} />
      </div>
      <div className='sm:w-[80%] w-full mx-auto'>
        <div className='grid sm:grid-cols-12 grid-cols-1 gap-5 mt-10'>
          <div className='sm:col-span-8'>
            <TagLeft title={tagtitle} />
          </div>
          <div className='sm:col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
