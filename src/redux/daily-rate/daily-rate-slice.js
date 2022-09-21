import { createSlice } from '@reduxjs/toolkit';
import { dailyRateInfo } from './daily-rate-operations';

const initialState = {
  notAllowedProducts: [],
  dailyRate: null,
  loading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [dailyRateInfo.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [dailyRateInfo.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.dailyRate = payload.dailyRate;
      store.notAllowedProducts = payload.notAllowedProducts;
    },
    [dailyRateInfo.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default dailyRateSlice.reducer;
