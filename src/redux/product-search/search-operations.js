import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosProductSearch } from '../../api/product-search';

export const getProductOperations = createAsyncThunk(
  '/product',
  async (query, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = await axiosProductSearch(query);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
