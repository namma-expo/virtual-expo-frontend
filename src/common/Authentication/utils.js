import { AUTHENTICATION_URLS } from 'constants/urls';

export async function signIn(userName, password) {
  try {
    const response = await fetch(AUTHENTICATION_URLS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function signUp({
  userName,
  password,
  emailID,
  phoneNumber,
  role,
}) {
  try {
    const response = await fetch(AUTHENTICATION_URLS.SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        email: emailID,
        contactNumber: phoneNumber,
        role: role,
      }),
    });
    console.log(response.status);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
