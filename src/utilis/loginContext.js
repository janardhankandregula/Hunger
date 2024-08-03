import { createContext, useContext } from 'react';
import { useState } from 'react';

const LoginContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  loggedInUser: 'Default user',
});

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('Default user');

  const login = () => {
    setIsLoggedIn(true);
    setLoggedInUser('janardhan');
  };
  const logout = () => {
    setIsLoggedIn(false);
    setLoggedInUser('Default user');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, loggedInUser }}>
      {children}
    </LoginContext.Provider>
  );
};
