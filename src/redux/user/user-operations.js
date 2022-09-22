import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetUser } from 'api/user';

export const getUser = createAsyncThunk(
  'user/get',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { accessToken },
      } = getState();
      const data = await axiosGetUser(accessToken);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
