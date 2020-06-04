import { AUTHENTICATION_URLS } from 'constants/urls';

export async function signIn(userName, password) {
  const response = await fetch(AUTHENTICATION_URLS.LOGIN, {
    method: 'POST',
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  });
  const result = await response.json();
  return result;
}
