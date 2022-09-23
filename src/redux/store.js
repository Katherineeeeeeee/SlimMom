import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from 'redux/auth/auth-slice';
import getProductSlice from 'redux/product-search/search-slice';
import dailyRateSlice from 'redux/daily-rate/daily-rate-slice';
import daySlice from 'redux/day/day-slice';
import dairyCalendarSlice from 'redux/dairy-calendar/dairy-calendar-slice';

const persistConfig = {
  key: 'auth-sid',
  storage,
  whitelist: ['sid', 'accessToken', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dailyRate: dailyRateSlice,
    product: getProductSlice,
    dayProduct: daySlice,
    dairyCalendar: dairyCalendarSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
