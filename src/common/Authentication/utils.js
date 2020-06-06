import { AUTHENTICATION_URLS } from 'constants/urls';

export async function signIn(userName, password) {
  const response = await fetch(AUTHENTICATION_URLS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  });
  const result = await response.json();
  return result;
}

export async function signUp({
  userName,
  password,
  emailID,
  phoneNumber,
  role,
}) {
  const response = await fetch(AUTHENTICATION_URLS.SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: password,
      email: emailID,
      contactNumber: phoneNumber,
      role: [
        {
          role: role,
        },
      ],
    }),
  });
  const result = await response.json();
  return result;
}
