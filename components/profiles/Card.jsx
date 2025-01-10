import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Card = () => {
  return (
    <div className='grid gap-5 my-10 sm:grid-cols-12 grid-cols-1 bg-septenary p-10 rounded-lg'>
      <div className='sm:col-span-3 overflow-hidden'>
        <img
          src={'/msg-4064874077-2204 (1).jpg'}
          className='rounded-full'
          alt='profile'
        />
      </div>
      <div className='sm:col-span-9'>
        <h1 className='text-2xl font-poppins font-semibold text-tertiary'>
          Minhaj Tapader
        </h1>
        <p className='font-roboto text-quinary my-3'>
          As a frontend developer, I specialize in creating interactive and
          efficient web applications. My core skills include React.js for
          building dynamic UIs, Next.js for server-side rendering and static
          generation, TypeScript for robust and type-safe code, and Express.js
          and Mongoose for backend development and database management. I am
          passionate about leveraging modern web technologies to deliver
          scalable and user-friendly solutions.
        </p>
        <div className='flex items-center gap-5'>
          <a
            href='https://www.facebook.com/muhammad.minhaj.799316'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
          </a>
          <a
            href='https://www.linkedin.com/in/minhaj-uddin-5b1a20338/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
          </a>
          <a
            href='https://x.com/MinhajTapader'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
