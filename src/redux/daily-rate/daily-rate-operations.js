import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetDailyRate, axiosGetDailyRateUser } from 'api/daily-rate';

export const dailyRateInfo = createAsyncThunk(
  'daily-rate',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosGetDailyRate(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const dailyRateUser = createAsyncThunk(
  'daily-rate/userId',
  async (userData, { rejectWithValue }) => {
    const { id, ...data } = userData;

    try {
      const result = await axiosGetDailyRateUser(id, data);
      console.log(result);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
