import { CONTACTS_URLS } from 'constants/urls';

export async function fetchAllContacts() {
  const authToken = localStorage.getItem('authToken');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await fetch(CONTACTS_URLS.ALL_CONTACTS, {
      method: 'GET',
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function createNewContact({
  company,
  email,
  name,
  notes,
  occupation,
  phone1,
  phone2,
}) {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await fetch(CONTACTS_URLS.CONTACTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        company,
        email,
        name,
        notes,
        occupation,
        phone1,
        phone2,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
