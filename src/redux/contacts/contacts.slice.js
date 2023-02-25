import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  getContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './contacts.thunk';
import { contactsInitState } from './contacts.init-state';

import { createSlice } from '@reduxjs/toolkit';

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    // userAddAction: (state, { payload }) => {
    //   state.contacts = [payload, ...state.contacts];
    // },
    // userDeleteAction: (state, { payload }) => {
    //   state.contacts = state.contacts.filter(user => user.id !== payload);
    // },
    contactsFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          user => user.id !== payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactsThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      })
      .addCase(addContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = [payload, ...state.contacts.items];
        state.contacts.isLoading = false;
      })
      .addCase(addContactsThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      });
  },
});

export const { userAddAction, userDeleteAction, contactsFilterAction } =
  phoneBookSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const phoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
