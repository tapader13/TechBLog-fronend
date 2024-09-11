import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Card = () => {
  return (
    <div className='grid gap-5 my-10 grid-cols-12 bg-septenary p-10 rounded-lg'>
      <div className='col-span-3 overflow-hidden'>
        <img src={'/asset 26.jpeg'} className='rounded-full' alt='profile' />
      </div>
      <div className='col-span-9'>
        <h1 className='text-2xl font-poppins font-semibold text-tertiary'>
          Minhaj Tapader
        </h1>
        <p className='font-roboto text-quinary my-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          quam accusantium laudantium et dolor odio eum eligendi, sed, vitae rem
          asperiores officiis ipsa cum aliquam ullam minus culpa possimus?
        </p>
        <div className='flex items-center gap-5'>
          <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaInstagram className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
          <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
        </div>
      </div>
    </div>
  );
};

export default Card;
