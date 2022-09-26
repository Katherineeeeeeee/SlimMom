import { createSlice } from '@reduxjs/toolkit';

import { getProductOperations } from './search-operations';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

const getProductSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getProductOperations.pending]: (store, payload) => {
      store.loading = true;
      store.error = null;
    },
    [getProductOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [getProductOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default getProductSlice.reducer;
