import {
  getContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from './users.thunk';
import { initState } from './users.init-state';

import { createSlice } from '@reduxjs/toolkit';

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: initState,
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

export const phoneBookReducer = phoneBookSlice.reducer;
