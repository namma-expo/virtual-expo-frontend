import { EXHIBITION_URLS } from 'constants/urls';

export async function fetchExhibtionDetails() {
  const authToken = localStorage.getItem('authToken');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await fetch(EXHIBITION_URLS.EXHIBITION_DETAILS, {
      method: 'GET',
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
