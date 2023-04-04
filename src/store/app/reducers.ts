import { changeLanguage } from 'i18next';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import type { State } from './types';

const reducers: SliceCaseReducers<State> = {
  changeLanguage: (state: State, action: PayloadAction<string>) => {
    state.locale = action.payload;
    changeLanguage(action.payload);
  },
};

export default reducers;
