import React from 'react';
import { signIn, signUp } from 'common/Authentication/utils';
import { AUTH_TOKEN_NAME } from 'common/Authentication/constants';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authContext, setAuthContext] = React.useState({
    authToken: null,
  });

  React.useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN_NAME);
    if (authToken) {
      setAuthContext({
        authToken: authToken,
      });
    }
  }, []);

  const authUserSignIn = async ({ userName, password }) => {
    const result = await signIn(userName, password);
    localStorage.setItem(AUTH_TOKEN_NAME, result.accessToken);
    setAuthContext({
      authToken: result.accessToken,
    });
  };

  const authUserSignUp = async ({
    userName,
    password,
    emailID,
    phoneNumber,
    role,
  }) => {
    const result = await signUp({
      userName,
      password,
      emailID,
      phoneNumber,
      role,
    });
    console.log(result, 'user signed up successfully');
  };

  return (
    <AuthContext.Provider
      value={{ authContext, authUserSignIn, authUserSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
