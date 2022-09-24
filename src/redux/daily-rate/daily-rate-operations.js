import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetDailyRate, axiosGetDailyRateUser } from 'api/daily-rate';

import { getUser } from 'redux/auth/auth-opetations';
import { getInfoByDay } from 'redux/day/day-operations';
import moment from 'moment';

export const dailyRateInfo = createAsyncThunk(
  'daily-rate',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosGetDailyRate(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
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

      dispatch(getInfoByDay({ date: moment(new Date()).format('yyyy-MM-DD') }));

      dispatch(getUser(accessToken));
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
