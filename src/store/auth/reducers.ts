import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import type { State } from './types';

const reducers: SliceCaseReducers<State> = {
  setUser: (state: State, action: PayloadAction<Auth.UserAuthentication>) => {
    state.userInfo = action.payload.user;
    state.accessToken = action.payload.token;
  },
  revokeUser: (state: State) => {
    state.userInfo = null;
    state.accessToken = null;
  },
};

export default reducers;
