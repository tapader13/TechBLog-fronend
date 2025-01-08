import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Mock Google login logic
    console.log('Google login triggered');
    setUser({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      image: 'https://via.placeholder.com/150',
    });
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-80 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Welcome Back!</h1>
        <p className='text-gray-600 mb-6'>Sign in with Google to continue</p>
        {user ? (
          <div className='user-info'>
            <img
              src={user.image}
              alt='User Avatar'
              className='w-16 h-16 rounded-full mx-auto mb-4'
            />
            <h3 className='text-lg font-semibold'>{user.name}</h3>
            <p className='text-gray-500'>{user.email}</p>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className='flex items-center justify-center bg-white text-gray-700 border border-gray-300 shadow-sm py-2 px-4 rounded-lg hover:bg-gray-100 transition'
          >
            <img
              src='/google-icon.svg'
              alt='Google Icon'
              className='w-5 h-5 mr-2'
            />
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
