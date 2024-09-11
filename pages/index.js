import Image from 'next/image';
import { Roboto, Poppins } from 'next/font/google';
import LeftPart from '@/components/parts/LeftPart';
import RightPart from '@/components/parts/RightPart';

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
  return (
    <div className={`${roboto.variable} ${poppins.variable} antialiased `}>
      <div className='w-[80%] mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-8'>
            <LeftPart />
          </div>
          <div className='col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
}
