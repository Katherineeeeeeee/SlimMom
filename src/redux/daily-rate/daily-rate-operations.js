import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetDailyRate } from '../../api/daily';

export const dailyRateInfo = createAsyncThunk(
    'daily-rate',
    async (data, { rejectWithValue }) => {
    try {
        const result = await axiosGetDailyRate(data);
        return result;
    } catch ({response}) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return rejectWithValue(error);
    }
    },
);