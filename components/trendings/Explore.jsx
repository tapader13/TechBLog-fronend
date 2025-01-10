import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Explore = () => {
  const topics = [
    { name: 'JavaScript', link: '/category/JavaScript' },
    { name: 'React', link: '/category/React' },
    { name: 'Node.js', link: '/category/Node.js' },
    { name: 'Python', link: '/category/Python' },
    { name: 'HTML', link: '/category/HTML' },
    { name: 'CSS', link: '/category/CSS' },
    { name: 'MongoDB', link: '/category/MongoDB' },
    { name: 'Express', link: '/category/Express' },
    { name: 'Next.js', link: '/category/Next.js' },
    { name: 'Tailwind', link: '/category/Tailwind' },
    { name: 'TypeScript', link: '/category/TypeScript' },
  ];

  return (
    <div className='p-5 mt-5 border border-[#ebebeb] rounded-xl'>
      <h1 className='text-tertiary font-poppins font-semibold text-[24px] text-center'>
        Explore Topic
      </h1>
      <div className='mt-3 mb-8 flex justify-center'>
        <img src='/asset 40.svg' alt='Explore Topics' />
      </div>
      {topics.map((topic, index) => (
        <div
          key={index}
          className='flex border-t items-center justify-between border-[#ebebeb] py-3'
        >
          <div className='flex items-center gap-2'>
            <span className='text-quaternary'>
              <FaAngleRight />
            </span>
            <Link href={topic.link}>
              <h2 className='font-roboto font-semibold text-tertiary hover:text-quaternary transition-all duration-300'>
                {topic.name}
              </h2>
            </Link>
          </div>
          <div className='font-roboto text-quinary'>(2)</div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
