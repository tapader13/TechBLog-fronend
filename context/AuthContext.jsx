'use client';

import { createContext, useState } from 'react';

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <authContext.Provider value={{ user, loading }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
