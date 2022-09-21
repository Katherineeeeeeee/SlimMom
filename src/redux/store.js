import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth,
  },
});
