// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1-wMahLPbetZkR1lgSz_x9LlyEuBOUgo',
  authDomain: 'blog-front-c0814.firebaseapp.com',
  projectId: 'blog-front-c0814',
  storageBucket: 'blog-front-c0814.firebasestorage.app',
  messagingSenderId: '3125076137',
  appId: '1:3125076137:web:09fafe58d1377f763149b8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
