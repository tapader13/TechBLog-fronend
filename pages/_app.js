import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollEffect from '@/components/ScrollEffect';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollEffect />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
