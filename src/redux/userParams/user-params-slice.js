import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  params: {},
};

const userParamsSlice = createSlice({
  name: 'userParams',
  initialState: initialState,
  reducers: {
    addUserParams: (store, { payload }) => {
      store.params = payload;
    },
  },
});

export default userParamsSlice.reducer;
export const { addUserParams } = userParamsSlice.actions;
