import React from 'react';
import { signIn } from 'common/Authentication/utils';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const authenticate = (userName, password) => {
    console.log(userName, password);
    const result = signIn(userName, password);
    setUser(result.accessToken);
  };
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
