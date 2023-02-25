import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import { authLoginThunk, authLogoutThunk } from './auth.thunk';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const register = createAsyncThunk('auth/register', async credentials => { });

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authLoginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(authLoginThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(authLogoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogoutThunk.fulfilled, state => {
        state.isLoading = false;
        state.data = null;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
