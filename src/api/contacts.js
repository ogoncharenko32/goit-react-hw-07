import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://66c14861f83fffcb58790652.mockapi.io',
});

export const apiGetContacts = async params => {
  const { data } = await contactsInstance.get('/contacts', {
    params,
  });
  return data;
};

export const apiAddContacts = async contact => {
  const { data } = await contactsInstance.post('/contacts', contact);
  return data;
};

export const apiDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
