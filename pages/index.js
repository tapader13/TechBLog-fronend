import Image from 'next/image';
import { Roboto, Poppins } from 'next/font/google';
import LeftPart from '@/components/parts/LeftPart';
import RightPart from '@/components/parts/RightPart';
import useBlogStore from '@/store/useBlogStore';
import { useEffect } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins',
});

export default function Home() {
  const { setBlogs } = useBlogStore();
  useEffect(() => {
    fetch('https://blog-frnt.vercel.app/api/allblogapi')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log('Blog fetched', data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={`${roboto.variable} ${poppins.variable} antialiased `}>
      <div className='lg:w-[80%] w-full mx-auto'>
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5'>
          <div className='lg:col-span-8'>
            <LeftPart />
          </div>
          <div className='lg:col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
}
