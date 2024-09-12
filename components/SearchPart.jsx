import React, { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const SearchPart = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const handleKew = (e) => {
      if (e.key === 'Escape') {
        setToggle(false);
      }
    };
    if (toggle) {
      window.addEventListener('keydown', handleKew);
    }
    return () => {
      window.removeEventListener('keydown', handleKew);
    };
  }, [toggle]);
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (search.trim() !== '') {
      router.push(`/search?q=${search}`);
      setSearch('');
      setToggle(false);
    }
  };
  return (
    <div>
      <FaSearch
        className='p-[10px] h-9 w-9  bg-senary-gradient rounded-full cursor-pointer text-white '
        onClick={handleToggle}
      />
      {toggle && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='fixed inset-0 bg-white flex flex-col items-center justify-center z-50 gap-3 '
        >
          <div>
            <h1 className='text-tertiary text-3xl mb-5 font-bold'>
              Press ESC to close
            </h1>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 w-full'>
            <motion.input
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleEnter}
              placeholder='Search and press enter...'
              className='sm:w-[40%] h-[50px] bg-white border border-gray-300 rounded-full py-[6px] px-5 text-xl focus:outline-none focus:ring-2 focus:ring-quaternary'
            />
            <Button
              className='bg-senary-gradient text-white rounded-full py-4 px-10 text-xl'
              onClick={handleSearch}
            >
              <FaSearch />
            </Button>
          </div>
          <Button
            className='bg-transparent border-none text-quinary text-2xl shadow-none absolute top-5 right-5 '
            onClick={handleToggle}
          >
            <FaTimes />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default SearchPart;
