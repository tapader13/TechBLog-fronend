import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';

const ScrollBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Button
      onClick={scrollToTop}
      className='bg-transparent text-quinary font-roboto border border-senary px-10 py-3  hover:border-quaternary hover:text-quaternary transition-all duration-300'
    >
      <span className='mr-2'>
        <FaArrowUp />
      </span>
      Back to top
    </Button>
  );
};

export default ScrollBtn;
