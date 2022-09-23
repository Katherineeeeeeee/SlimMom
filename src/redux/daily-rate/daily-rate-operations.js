import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetDailyRate, axiosGetDailyRateUser } from 'api/daily-rate';

import { getUser } from 'redux/auth/auth-opetations';

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
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      const { id, ...data } = userData;
      const {
        auth: { accessToken },
      } = getState();
      const result = await axiosGetDailyRateUser(id, data);
      dispatch(getUser(accessToken));
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
