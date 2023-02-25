import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, token } from 'components/http/http';
import { selectAuthToken } from 'redux/auth/auth-selectors';

export const getProfileThunk = createAsyncThunk(
  'current',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());

    if (!stateToken) {
      return rejectWithValue();
    }

    try {
      token.set(`${stateToken.token}`);
      const { data } = await privateApi.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
