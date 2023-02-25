import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'components/http/http';

export const getContactsThunk = createAsyncThunk('contacts', async () => {
  const { data } = await privateApi.get('/contacts');

  return data;
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async newAbonent => {
    const { data } = await privateApi.post('/contacts', newAbonent);

    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await privateApi.delete(`/contacts/${id}`);

    return data;
  }
);

// export const authLogoutThunk = createAsyncThunk('logout', async () => {
//   const { data } = await privateApi.post('/users/logout');

//   token.remove();
//   return data;
// });
