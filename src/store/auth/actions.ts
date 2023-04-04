import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'api/auth';
import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import type { State } from './types';

export const login = createAsyncThunk(
  'auth/signIn',
  async (data: Auth.UserCertificate, { rejectWithValue }) => {
    try {
      const response = await signIn(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const extraReducers = (builder: ActionReducerMapBuilder<State>) => {
  builder.addCase(login.fulfilled, (state, action) => {
    state.accessToken = action.payload.token;
    state.userInfo = action.payload.user;
  });
};
