import { createSelector } from '@reduxjs/toolkit';
import initialState from './state';
import type { State } from './types';

const selectAuth = ({ auth }: { auth: State }) => auth || initialState;

export const isAuthenticatedSelector = createSelector(selectAuth, (state) =>
  Boolean(state.userInfo && state.accessToken),
);
