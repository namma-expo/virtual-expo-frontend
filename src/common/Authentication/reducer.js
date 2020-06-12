import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNOUT_SUCCESS,
} from 'common/Authentication/constants';

export const initialAuthState = {
  authToken: null,
};

export default function authReducer(state, action) {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      console.log('reducer success');
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
    default:
      return initialAuthState;
  }
}
