import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNOUT_SUCCESS,
  NETWORK_ISSUES,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
} from 'common/Authentication/constants';

export const initialAuthState = {
  authToken: null,
};

export default function authReducer(state, action) {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        authToken: action.authToken,
      };
    case USER_SIGNIN_FAILED:
      return {
        authToken: null,
        error: action.error,
      };
    case USER_SIGNOUT_SUCCESS:
      return {
        authToken: null,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        authToken: action.authToken,
      };
    case USER_REGISTRATION_FAILED:
      return {
        authToken: null,
        error: action.error,
      };
    case NETWORK_ISSUES:
      return {
        authToken: null,
      };
    default:
      return initialAuthState;
  }
}
