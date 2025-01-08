'use client';

import { auth } from '@/firebase/firebase.init';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user, 'user is now authenticated');
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <authContext.Provider value={{ user, loading, googleLogin, logoutUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
