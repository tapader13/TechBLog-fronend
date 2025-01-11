import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getFirstImage, getDate } from '@/lib/constant';

const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEditorPick = async (value) => {
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?specificCategory=${value}`
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setData(data);
    };
    getEditorPick('popular');
  }, []);
  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      <h1 className='text-tertiary text-center font-poppins font-semibold text-[24px]'>
        Popular Posts
      </h1>
      <div className=' my-3 flex justify-center'>
        <img src='/asset 40.svg' alt='' />
      </div>
      {data &&
        data.slice(0, 3).map((item) => {
          return (
            <div
              key={item.title}
              className='grid grid-cols-12 gap-4 py-5 border-b border-[#ebebeb]'
            >
              <div className='col-span-3 h-[70px] w-[70px] relative'>
                {/* Image Container */}
                <div className='h-[70px] relative w-[70px] rounded-full overflow-hidden'>
                  <Image
                    src={getFirstImage(item.description) || '/asset 6.jpeg'}
                    alt=''
                    fill
                    className='hover:scale-110 cursor-pointer transition-all duration-300 rounded-full '
                  />
                </div>
                {/* Notification Icon */}
                <div className='absolute -top-1 -left-1 h-6 w-6 bg-quaternary text-white text-xs flex items-center justify-center rounded-full font-extrabold border-2 border-white'>
                  1
                </div>
              </div>
              <div className='col-span-9'>
                <h3 className='text-tertiary font-poppins font-bold text-[18px] hover:text-quaternary transition-all duration-300 cursor-pointer'>
                  {item.title}
                </h3>
                <p className='font-roboto text-quinary'>
                  {getDate(item.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Popular;

//  <div className='grid grid-cols-12 gap-4 py-5 border-b border-[#ebebeb]'>
//         <div className='col-span-3 h-[70px] w-[70px] relative'>
//           {/* Image Container */}
//           <div className='h-[70px] relative w-[70px] rounded-full overflow-hidden'>
//             <Image
//               src={'/asset 6.jpeg'}
//               alt=''
//               fill
//               className='hover:scale-110 cursor-pointer transition-all duration-300 rounded-full object-cover'
//             />
//           </div>
//           {/* Notification Icon */}
//           <div className='absolute -top-1 -left-1 h-6 w-6 bg-quaternary text-white text-xs flex items-center justify-center rounded-full font-extrabold border-2 border-white'>
//             1
//           </div>
//         </div>
//         <div className='col-span-9'>
//           <h3 className='text-tertiary font-poppins font-bold text-[18px] hover:text-quaternary transition-all duration-300 cursor-pointer'>
//             60 Things To Immediately Do About Building
//           </h3>
//           <p className='font-roboto text-quinary'>August 23, 2022</p>
//         </div>
//       </div>
//       <div className='grid grid-cols-12 gap-4 py-5 '>
//         <div className='col-span-3 h-[70px] w-[70px] relative'>
//           {/* Image Container */}
//           <div className='h-[70px] relative w-[70px] rounded-full overflow-hidden'>
//             <Image
//               src={'/asset 6.jpeg'}
//               alt=''
//               fill
//               className='hover:scale-110 cursor-pointer transition-all duration-300 rounded-full object-cover'
//             />
//           </div>
//           {/* Notification Icon */}
//           <div className='absolute -top-1 -left-1 h-6 w-6 bg-quaternary text-white text-xs flex items-center justify-center rounded-full font-extrabold border-2 border-white'>
//             1
//           </div>
//         </div>
//         <div className='col-span-9'>
//           <h3 className='text-tertiary font-poppins font-bold text-[18px] hover:text-quaternary transition-all duration-300 cursor-pointer'>
//             60 Things To Immediately Do About Building
//           </h3>
//           <p className='font-roboto text-quinary'>August 23, 2022</p>
//         </div>
//       </div>
