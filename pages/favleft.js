import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  getDate,
  getFirstImage,
  getFirstImage1,
  getFirstWords,
} from '@/lib/constant';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

const FavLeft = ({ title }) => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(2);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const getCat = async (value) => {
      try {
        await delay(1000);
        const res = await fetch(
          `http://localhost:3000/api/favoriteapi?email=${user.email}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data, 11);
        setData(data?.favBlogs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCat(title);
  }, [title]);
  console.log(data[0]?.blog, 'tag');
  // Function to load more items
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 2); // Load 2 more items
      setLoading(false);
    }, 500); // Simulate a small delay for loading
  };
  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(
      `http://localhost:3000/api/favoriteapi?id=${id}&email=${user.email}`
    );
    if (res?.data?.success) {
      toast.success(res.data?.message);
      const updatedData = data.filter((fav) => fav?.blog?._id !== id);
      setData(updatedData);
    }
  };
  return (
    <div className='border border-[#ebebeb] p-5 rounded-xl'>
      {data &&
        data.length > 0 &&
        data?.slice(0, visibleItems).map((item) => {
          //   const { item } = fav;
          console.log(item?.blog, 234, item?.blog?.description);
          return (
            <Link href={`/details/${item?.blog?.title}`}>
              <div key={item._id}>
                <div className='grid sm:grid-cols-12 grid-cols-1 gap-5'>
                  <div className='relative sm:col-span-5'>
                    <div className='relative group h-[240px] w-full rounded-xl overflow-hidden '>
                      <Image
                        src={
                          getFirstImage1(item?.blog?.description) ||
                          '/asset 9.jpeg'
                        }
                        alt='hero'
                        fill
                        className='group-hover:scale-110 transition-all duration-500'
                      />
                      <div className='absolute p-5 bottom-0 left-0 w-full h-full '>
                        <img
                          src={
                            getFirstImage1(item.blog.description) ||
                            '/asset 9.jpeg'
                          }
                          className='p-[5px] h-12 w-12  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='sm:col-span-7'>
                    <div className='flex items-center flex-wrap justify-center gap-2 my-5'>
                      <div className='rounded-full overflow-hidden'>
                        <Image
                          src={'/msg-4064874077-2204 (1).jpg'}
                          alt=''
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                        Minhaj Tapader
                      </div>
                      <div className='text-quaternary pr-1 text-2xl relative'>
                        <p className='absolute -top-5  left-0'>.</p>
                      </div>
                      <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                        {title === 'Web Development' ? 'Web Dev' : title}
                      </div>
                      <div className='text-quaternary pr-1 text-2xl relative'>
                        <p className='absolute -top-5  left-0'>.</p>
                      </div>
                      <div className='text-quinary font-roboto'>
                        {getDate(item?.blog?.createdAt)}
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => handleDelete(item?.blog?._id)}
                        className='bg-red-600 text-white'
                      >
                        Remove
                      </Button>
                    </div>
                    <h1 className='text-tertiary font-poppins hover:text-quaternary transition-all duration-300 font-bold text-2xl cursor-pointer'>
                      {item?.blog?.title.slice(0, 1).toUpperCase() +
                        item?.blog?.title.slice(1)}
                    </h1>
                    <p className='text-quinary font-roboto my-4 tracking-wide'>
                      {getFirstWords(item?.blog?.description)}
                    </p>
                  </div>
                </div>
                <div className='border border-[#ebebeb] my-6' />
              </div>
            </Link>
          );
        })}
      {data && data.length <= 0 && <h6>No Favorite Blog</h6>}
      <div className='flex justify-center'>
        <Button
          className='bg-transparent text-quinary font-roboto border border-senary px-10 py-3  hover:border-quaternary hover:text-quaternary transition-all duration-300'
          onClick={loadMore}
          disabled={visibleItems >= data.length || loading}
        >
          {loading
            ? 'Loading...'
            : visibleItems >= data.length
            ? 'No More Items'
            : 'Load More'}
        </Button>
      </div>
    </div>
  );
};

export default FavLeft;
