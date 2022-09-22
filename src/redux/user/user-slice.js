import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './user-operations';

const user = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: {
    [getUser.fulfilled]: (store, payload) => {
      store = payload;
    },
  },
});

export default user.reducer;
