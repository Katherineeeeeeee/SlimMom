import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosProductSearch } from '../../api/product-search';

export const getProductOperations = createAsyncThunk(
  '/product',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axiosProductSearch(query);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
