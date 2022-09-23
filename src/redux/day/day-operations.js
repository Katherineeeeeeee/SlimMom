import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDay, axiosDeleteDay, axiosDayInfo } from 'api/day';

export const postEatenProduct = createAsyncThunk(
  'day',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosDay(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'day/delete',
  async (userDataId, { rejectWithValue }) => {
    try {
      return await axiosDeleteDay(userDataId);
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'day/info',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axiosDayInfo(date);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
