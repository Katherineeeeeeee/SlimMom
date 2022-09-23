import { createSlice } from '@reduxjs/toolkit';

import { addDate, addWeight } from './dairy-calendar-operation';

const initialState = {
  date: '',
  productId: '',
  weight: '',
};

const dairyCalendarSlice = createSlice({
  name: 'postEatenProduct',
  initialState,
  reducers: {
    // [addDate]: (store, payload) => {
    //   console.log(payload);
    //   store.date = payload;
    // },
    addProductId: (store, payload) => {
      store.productId = payload;
    },
    [addWeight]: (store, payload) => {
      console.log(payload);
      store.weight = payload;
    },
  },
});

export default dairyCalendarSlice.reducer;
