import { createSlice } from '@reduxjs/toolkit';
import {
  postEatenProduct,
  deleteEatenProduct,
  getInfoByDay,
} from './day-operations';

const initialState = {
  day: {},
  daySummary: {},
  eatenProduct: {},
  eatenProducts: [],
  loading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: {
    //* getDay

    [postEatenProduct.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [postEatenProduct.fulfilled]: (store, { payload }) => {
      console.log(payload);
      store.day = payload.day;
      store.daySummary = payload.daySummary;
      store.eatenProduct = payload.eatenProduct;
      store.loading = false;
      store.summary = payload;
    },
    [postEatenProduct.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* deleteDay

    [deleteEatenProduct.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteEatenProduct.fulfilled]: (store, { payload }) => {
      store.loading = false;
    },
    [deleteEatenProduct.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* getInfoAboutDay

    [getInfoByDay.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getInfoByDay.fulfilled]: (store, { payload }) => {
      store.eatenProducts = payload.eatenProducts;
      store.loading = false;
      store.aboutDay = payload;
    },
    [getInfoByDay.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default daySlice.reducer;
