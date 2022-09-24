import { createSlice } from '@reduxjs/toolkit';
import { dailyRateInfo, dailyRateUser } from './daily-rate-operations';

const initialState = {
  id: '',
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
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
      store.error = payload.data.message;
    },

    [dailyRateUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [dailyRateUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.id = payload.id;
      store.dailyRate = payload.dailyRate;
      store.summaries = payload.summaries;
      store.notAllowedProducts = payload.notAllowedProducts;
    },
    [dailyRateUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.message;
    },
  },
});

export default dailyRateSlice.reducer;
