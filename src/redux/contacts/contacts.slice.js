import {
  getContactsThunk,
  deleteContactsThunk,
  addContactThunk,
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

      // ==================== Get Contacts ========================
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [...payload];
        state.isLoading = false;
        state.error = null;
      })

      // ===================== Delete Contact =====================
      .addCase(deleteContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(user => user.id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //  ==================== Add Contact ===========================
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { userAddAction, userDeleteAction, contactsFilterAction } =
  phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;
