import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import instance from '../services/api';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  instance.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
}
