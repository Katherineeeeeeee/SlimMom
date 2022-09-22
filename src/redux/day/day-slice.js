import { createSlice } from '@reduxjs/toolkit';
import { getDay, deleteDay, getInfoAboutDay } from './day-operations';

const initialState = {
  summary: [],
  aboutDay: {},
  loading: false,
  error: null,
};

const day = createSlice({
  name: 'day',
  initialState,
  extraReducers: {
    //* getDay

    [getDay.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getDay.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.summary = payload;
    },
    [getDay.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* deleteDay

    [deleteDay.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteDay.fulfilled]: (store, { payload }) => {
      store.loading = false;
    },
    [deleteDay.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* getInfoAboutDay

    [getInfoAboutDay.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getInfoAboutDay.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.aboutDay = payload;
    },
    [getInfoAboutDay.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default day.reducer;
