import { createSelector } from '@reduxjs/toolkit';
import initialState from './state';
import type { State } from './types';

const selectApp = ({ app }: { app: State }) => app || initialState;

export const languageSelector = createSelector(
  selectApp,
  (state) => state.locale,
);
