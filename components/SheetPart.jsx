import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export function SheetPart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FaBars className='p-[10px] sm:hidden h-9 w-9  bg-senary-gradient rounded-full cursor-pointer text-white transition-all duration-300' />
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <div>
            <ul className='flex flex-col  items-center gap-2 text-quinary font-poppins '>
              <li className='cursor-pointer py-2 px-5 bg-senary-gradient rounded-full text-white'>
                Home
              </li>
              <li className='cursor-pointer py-2 px-5 hover:text-tertiary transition-all duration-300 '>
                About
              </li>
              <li className='cursor-pointer py-2 px-5 hover:text-tertiary transition-all duration-300 '>
                Services
              </li>
              <li className='cursor-pointer py-2 px-5 hover:text-tertiary transition-all duration-300 '>
                Contact
              </li>
            </ul>
          </div>
        </SheetClose>
        <SheetFooter>
          <SheetClose asChild>
            <div className='flex justify-center mt-5 items-center gap-5'>
              <FaFacebook className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
              <FaInstagram className='text-xl cursor-pointer text-tertiary transition-all duration-300' />
              <FaLinkedin className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
              <FaTwitter className=' text-xl cursor-pointer text-tertiary transition-all duration-300' />
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
