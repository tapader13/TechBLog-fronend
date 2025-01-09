import { Breadcamp } from '@/components/Breadcamp';
import Card from '@/components/profiles/Card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import RightPart from '@/components/parts/RightPart';
import readingTime from 'reading-time';
import Loader from '@/components/Loader';
import useAuth from '@/hooks/useAuth';
import useBlogStore from '@/store/useBlogStore';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiHeart, CiBookmark } from 'react-icons/ci';
const DetailsPage = () => {
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);
  const [readTime, setReadTime] = useState('');
  const [load, setLoad] = useState(true);
  const [view, setView] = useState('');
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true); // Start loading
        const res = await fetch(
          `http://localhost:3000/api/blogapi?title=${title}`
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setBlog(data[0]);

        // Calculate reading time and set it
        const stats = readingTime(data[0]?.description || '');
        setReadTime(stats.text); // e.g., "4 min read"
      } catch (error) {
        console.error(error);
      } finally {
        setLoad(false); // Stop loading after fetch is complete
      }
    };

    if (title) {
      fetchData();
    }
  }, [title]);
  useEffect(() => {
    const setViews = async () => {
      if (!blog?._id) return;
      try {
        const res = await fetch(`http://localhost:3000/api/viewsapi`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: blog._id }),
        });
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setView(data);
      } catch (error) {
        console.error(error);
      }
    };
    setViews();
  }, [blog]);
  const { setLikes, setDislikes, singleBlog } = useBlogStore();
  const handleLike = async () => {
    if (!user) {
      router.push('/login');
    } else {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/likedislikeapi`,
          {
            params: {
              userEmail: user.email,
              id: blog._id,
            },
          }
        );
        if (response.data.success) {
          if (response.data.message === 'Blog disliked successfully!') {
            setDislikes(response?.data?.blog?._id, response?.data?.userId);
            toast.success(response.data.message);
          }
          if (response.data.message === 'Blog liked successfully!') {
            console.log(response?.data?.blog?._id, response?.data?.userId);
            setLikes(response?.data?.blog?._id, response?.data?.userId);
            toast.success(response.data.message);
            // dispatch(setLikes({ user: user._id, postId: id }));
          }
          // toast({
          //   variant: 'success',
          //   description: `${response.data.message}`,
          // });
          console.log(response.data.message, 222);
        }
      } catch (error) {
        console.log(error, 333);
        // toast({
        //   variant: 'destructive',
        //   description: `${error.response.data.message}`,
        // });
      }
    }
  };

  const Code = ({ node, inline, className, children, ...props }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
    const match = /language-(\w+)/.exec(className || '');
    if (inline) {
      return <code>{children}</code>;
    } else if (match) {
      return (
        <div className='relative'>
          <SyntaxHighlighter
            style={a11yDark}
            language={match[1]}
            PreTag='pre'
            {...props}
            codeTagProps={{
              style: {
                padding: '0',
                borderRadius: '5px',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              },
            }}
          >
            {String(children).replace(/\n$/, ' ')}
          </SyntaxHighlighter>
          <button
            onClick={handleCopy}
            className='absolute top-0 right-0 bg-[#3d3d3d] text-[#fff] p-2.5'
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      );
    } else {
      return <code {...props}>{children}</code>;
    }
  };
  console.log(singleBlog, 345);
  const blogLike =
    singleBlog && blog ? singleBlog.find((blg) => blg._id === blog._id) : null;
  console.log(blogLike, 3451);
  const handleBookmark = async () => {
    if (!user) {
      router.push('/login');
    } else {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/favoriteapi`,
          {
            userEmail: user?.email,
            blogId: blog._id,
          }
        );
        if (response.data.success) {
          toast.success(response?.data?.message);
        }
      } catch (error) {
        console.log(error, 333);
        toast({
          variant: 'destructive',
          description: `${error.response.data.message}`,
        });
      }
    }
  };
  return (
    <div>
      <div className='sm:w-[80%] w-full mx-auto'>
        <Breadcamp title={title} />
        <div className='grid sm:grid-cols-12 grid-cols-1 gap-5 mt-10'>
          <div className='sm:col-span-8 p-2'>
            {/* Show loading spinner or message */}
            {load ? (
              <Loader />
            ) : (
              <>
                <h1 className='text-4xl font-poppins text-tertiary font-bold'>
                  {title}
                </h1>
                <div className='flex items-center flex-wrap gap-3 my-5'>
                  <div className='rounded-full overflow-hidden'>
                    <Image
                      src={'/asset 10.jpeg'}
                      alt=''
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                    Minhaj Tapadar
                  </div>
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                    <Link href={`/category/inspiration`}>Inspiration</Link>
                  </div>
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  <div className='text-quinary font-roboto'>
                    August 19, 2022
                  </div>
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  {/* Display reading time */}
                  {readTime && (
                    <div className='text-quinary font-roboto ml-0'>
                      {readTime}
                    </div>
                  )}
                  <div className='text-quaternary pr-1 text-2xl relative'>
                    <p className='absolute -top-5  left-0'>.</p>
                  </div>
                  <div className='text-quinary font-roboto'>
                    {view?.blog?.views} views
                  </div>
                </div>
                <div className='prose w-full max-w-none'>
                  {blog && (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{ code: Code }}
                    >
                      {blog.description}
                    </ReactMarkdown>
                  )}
                </div>
                <div className='mt-5 flex justify-between'>
                  <Button
                    className='flex items-center gap-2'
                    onClick={handleLike}
                  >
                    <span>
                      <CiHeart />
                    </span>
                    <span>{blogLike?.likes?.length}</span>
                  </Button>
                  <Button
                    onClick={handleBookmark}
                    className='flex items-center gap-2'
                  >
                    <CiBookmark />
                  </Button>
                </div>
                <div className='border border-[#ebebeb] my-10' />
                <div className='flex justify-end w-full gap-3 flex-wrap items-center '>
                  <Link href='/tags/Web Development'>
                    <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                      #Web Development
                    </Button>
                  </Link>
                  <Link href='/tags/Front End'>
                    <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                      #Front End
                    </Button>
                  </Link>
                  <Link href='/tags/Back End'>
                    <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                      #Back End
                    </Button>
                  </Link>

                  <Link href='/tags/Full Stack'>
                    <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                      #Full Stack
                    </Button>
                  </Link>

                  <Link href='/tags/Database'>
                    <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                      #Database
                    </Button>
                  </Link>
                </div>
                <Card />
              </>
            )}
          </div>
          <div className='sm:col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
