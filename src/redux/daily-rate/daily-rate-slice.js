import { createSlice } from '@reduxjs/toolkit';

import { dailyRateOperations } from './daily-rate-operations';

const initialState = {
  items: {},
  loading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [dailyRateOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [dailyRateOperations.fulfilled]: (store, payload) => {
      store.loading = false;
      store.items = payload;
    },
    [dailyRateOperations.rejected]: (store, payload) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default dailyRateSlice.reducer;
