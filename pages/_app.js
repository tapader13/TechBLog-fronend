import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollEffect from '@/components/ScrollEffect';
import AuthContext from '@/context/AuthContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <ScrollEffect />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthContext>
  );
}
