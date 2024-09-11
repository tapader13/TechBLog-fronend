import { Breadcamp } from '@/components/Breadcamp';
import CategoryLeft from '@/components/parts/CategoryLeft';
import RightPart from '@/components/parts/RightPart';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const { cattitle } = router.query;
  const title = cattitle
    ? cattitle.slice(0, 1).toUpperCase() + cattitle.slice(1)
    : '';
  return (
    <div>
      <div className='bg-septenary flex flex-col justify-center items-center min-h-[200px]'>
        <h1 className='font-roboto font-semibold text-3xl text-tertiary '>
          {title}
        </h1>
        <Breadcamp title={title} />
      </div>
      <div className='w-[80%] mx-auto'>
        <div className='grid grid-cols-12 gap-5 mt-10'>
          <div className='col-span-8'>
            <CategoryLeft title={cattitle} />
          </div>
          <div className='col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
