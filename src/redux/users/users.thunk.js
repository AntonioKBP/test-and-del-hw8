import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get(
      'https://63e666537eef5b22338523c9.mockapi.io/api/contacts-list/contacts'
    );

    return data;
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(
      `https://63e666537eef5b22338523c9.mockapi.io/api/contacts-list/contacts/${id}`
    );

    return data;
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, phone }) => {
    const { data } = await axios.post(
      'https://63e666537eef5b22338523c9.mockapi.io/api/contacts-list/contacts',
      { id, name, phone }
    );

    return data;
  }
);
