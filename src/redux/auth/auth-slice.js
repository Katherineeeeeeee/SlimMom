import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './auth-opetations';

const initialState = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  error: null,
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.sid = payload.sid;
  store.accessToken = payload.accessToken;
  store.refreshToken = payload.refreshToken;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // * REGISTER

    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [register.fulfilled]: (store, { payload }) => {
      accessAuth(store, payload);
      store.isLogin = false;
    },

    [register.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * LOGIN

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [login.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * LOGOUT

    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * REFRESH

    [refresh.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [refresh.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.sid = payload.sid;
      store.accessToken = payload.newAccessToken;
      store.refreshToken = payload.newRefreshToken;
    },

    [refresh.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default auth.reducer;
