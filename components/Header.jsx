import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import SearchPart from './SearchPart';
import { SheetPart } from './SheetPart';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const Header = () => {
  const { logoutUser, user } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logoutUser();
    toast.success('Logout Successfully');
    router.push('/login');
  };
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex justify-between items-center py-6'>
        <div className='flex items-center gap-5'>
          <div>
            <Link href={'/'}>
              <h1 className='text-3xl font-bold font-roboto text-tertiary'>
                Minhaj <span className='text-quaternary text-3xl'>.</span>
              </h1>
            </Link>
          </div>
          <div>
            <ul className='sm:flex hidden items-center gap-2 text-quinary font-poppins '>
              <Link href={'/'}>
                <li className='cursor-pointer py-2 px-5 bg-senary-gradient rounded-full text-white'>
                  Home
                </li>
              </Link>
              {/* <li className='cursor-pointer py-2 px-5 hover:text-tertiary transition-all duration-300 '>
                About
              </li> */}
              {/* <li className='cursor-pointer py-2 px-5 hover:text-tertiary transition-all duration-300 '>
                Services
              </li> */}
              {user && (
                <li
                  onClick={handleLogout}
                  className='cursor-pointer rounded-full py-2 px-5 hover:text-tertiary hover:bg-senary-gradient transition-all duration-300 '
                >
                  Logout
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='sm:flex hidden items-center gap-5'>
            <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
            <FaInstagram className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
            <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
            <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
          </div>
          <div className='flex items-center gap-3'>
            <SearchPart />
            <SheetPart></SheetPart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
