import { authContext } from '@/context/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;
