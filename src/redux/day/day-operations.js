import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDay, axiosDeleteDay, axiosDayInfo } from 'api/day';

export const postEatenProduct = createAsyncThunk(
  'day',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosDay(data);
      console.log(result);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteDay = createAsyncThunk(
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

export const getInfoAboutDay = createAsyncThunk(
  'day/info',
  async (date, { rejectWithValue }) => {
    try {
      const data = await axiosDayInfo(date);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
