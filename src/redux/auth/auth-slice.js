import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
// import {
//   registrationThunk,
//   loginThunk,
//   logoutThunk,
//   refreshUserThunk,
// } from 'redux/contacts/contacts.thunk';

import {
  registrationThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './auth.thunk';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const register = createAsyncThunk('auth/register', async credentials => { });

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.pending, state => state)
      .addCase(registrationThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registrationThunk.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(loginThunk.pending, state => state)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.pending, state => state)
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.token = null;
        state.user.name = '';
        state.user.email = '';
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, state => state)
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
