'use client';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const Login = () => {
  const { googleLogin, user } = useAuth();
  const router = useRouter();
  const handleLogin = () => {
    googleLogin()
      .then(async (result) => {
        try {
          const res = await axios.post(
            'https://blog-frnt.vercel.app/api/authapi',
            {
              username: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL,
            }
          );
          if (res?.data?.success) {
            router.push('/');
          }
        } catch (error) {}
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('Google login triggered');
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-80 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Welcome Back!</h1>
        <p className='text-gray-600 mb-6'>Sign in with Google to continue</p>
        <div className='flex justify-center'>
          <button
            onClick={handleLogin}
            className='flex items-center justify-center bg-senary-gradient text-gray-700 border border-gray-300 shadow-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition'
          >
            {/* <img
            src='/google-icon.svg'
            alt='Google Icon'
            className='w-5 h-5 mr-2'
          /> */}
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
