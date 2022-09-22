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

import dailyRateReducer from './daily-rate/daily-rate-slice';
import auth from './auth/auth-slice';
import getProductSlice from './product-search/search-slice';
import dailyRateSlice from './daily-rate/daily-rate-slice';

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
