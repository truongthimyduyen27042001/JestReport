import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import { extraReducers } from './actions';

export default createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers,
});
