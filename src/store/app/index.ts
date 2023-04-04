import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';

export default createSlice({
  name: 'app',
  initialState,
  reducers,
});
