import React, { useReducer } from 'react';
import { signIn, signUp } from 'common/Authentication/utils';
import {
  AUTH_TOKEN_NAME,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNOUT_SUCCESS,
  NETWORK_ISSUES,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
} from 'common/Authentication/constants';
import authReducer, { initialAuthState } from 'common/Authentication/reducer';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authContext, dispatch] = useReducer(authReducer, initialAuthState);
  console.log(authContext);

  React.useEffect(() => {
    const authToken = localStorage.getItem(AUTH_TOKEN_NAME);
    if (authToken) {
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        authToken: authToken,
      });
    }
  }, []);

  const authUserSignIn = async ({ userName, password }) => {
    const result = await signIn(userName, password);
    if (!result) {
      dispatch({
        type: NETWORK_ISSUES,
      });
    }

    if (result.token) {
      console.log('here success');
      //TODO : Replace localstorage with http only cookies
      localStorage.setItem(AUTH_TOKEN_NAME, result.token);
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        authToken: result.token,
      });
    } else {
      console.log('here failed');
      dispatch({
        type: USER_SIGNIN_FAILED,
        error: result,
      });
    }
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
    if (!result) {
      dispatch({
        type: NETWORK_ISSUES,
      });
    }

    if (result.token) {
      //TODO : Replace localstorage with http only cookies
      localStorage.setItem(AUTH_TOKEN_NAME, result.token);
      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        authToken: result.token,
      });
    } else {
      dispatch({
        type: USER_REGISTRATION_FAILED,
        error: result,
      });
    }
  };

  const authUserSignOut = () => {
    //TODO : Replace localstorage with http only cookies
    localStorage.removeItem(AUTH_TOKEN_NAME);
    dispatch({
      type: USER_SIGNOUT_SUCCESS,
    });
  };

  return (
    <AuthContext.Provider
      value={{ authContext, authUserSignIn, authUserSignUp, authUserSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
