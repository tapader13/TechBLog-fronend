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

const DetailsPage = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { title } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://blog-frnt.vercel.app/api/blogapi?title=${title}`
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setBlog(data[0]);
    };
    fetchData();
  }, [title]);
  console.log(blog, 'blog');
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
  console.log(blog, 'blog');
  return (
    <div>
      <div className='w-[80%] mx-auto'>
        <Breadcamp title={title} />
        <div className='grid grid-cols-12 gap-5 mt-10'>
          <div className='col-span-8'>
            <h1 className='text-4xl font-poppins text-tertiary font-bold'>
              {/* {title
                .split('-')
                .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                .join(' ')} */}
              {title}
            </h1>
            <div className='flex items-center gap-3 my-5'>
              <div className='rounded-full overflow-hidden'>
                <Image src={'/asset 10.jpeg'} alt='' width={40} height={40} />
              </div>
              <div className='text-quinary font-roboto cursor-pointer hover:text-quaternary transition-all duration-300'>
                Minhaj Tapader
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
              <div className='text-quinary font-roboto'>August 19, 2022</div>
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
            <div className='border border-[#ebebeb] my-10' />
            <div className='flex justify-end w-full gap-3 flex-wrap items-center '>
              <Link href='/tags/html'>
                <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                  #html
                </Button>
              </Link>
              <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                #css
              </Button>
              <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                #javascript
              </Button>
              <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                #react
              </Button>
              <Button className='shadow-none bg-transparent text-quinary font-roboto border border-quinary px-3 py-1  hover:border-quaternary hover:text-quaternary transition-all duration-300 '>
                #nextjs
              </Button>
            </div>
            <Card />
          </div>
          <div className='col-span-4'>
            <RightPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
