'use client';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';

const Login = () => {
  const { googleLogin } = useAuth();

  const handleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
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
        <button
          onClick={handleLogin}
          className='flex items-center justify-center bg-white text-gray-700 border border-gray-300 shadow-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition'
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
  );
};

export default Login;
