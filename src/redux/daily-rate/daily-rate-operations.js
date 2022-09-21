import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosDailyRate } from '../../api/daily-rate';

export const dailyRateOperations = createAsyncThunk(
  '/daily-rate',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await axiosDailyRate(data);
      console.log(result.data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
