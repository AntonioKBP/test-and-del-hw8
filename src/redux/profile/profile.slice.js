import { createSlice } from '@reduxjs/toolkit';
import { profileInitState } from './profile.init-state';
import { getProfileThunk } from './profile.thunk';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitState,
  extraReducers: builder => {
    builder
      .addCase(getProfileThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getProfileThunk.rejected, (state, { error }) => {
        state.isLoading = false;
      });
  },
});

export const profileReducer = profileSlice.reducer;
