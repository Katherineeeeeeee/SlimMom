import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh, getUser } from './auth-opetations';

const initialState = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  newUser: {},
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
  reducers: {
    clearNewUser: store => {
      store.newUser = {};
    },
  },

  extraReducers: {
    // * REGISTER

    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [register.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = false;
      store.newUser = payload;
      store.user = { ...store.user };
      store.sid = '';
      store.accessToken = '';
      store.refreshToken = '';
    },

    [register.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },

    // * LOGIN

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [login.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
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
      store.isRefreshing = true;
    },

    [refresh.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.sid = payload.sid;
      store.accessToken = payload.newAccessToken;
      store.refreshToken = payload.newRefreshToken;
      store.isRefreshing = false;
    },

    [refresh.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * GET USER

    [getUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [getUser.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.user = payload;
    },

    [getUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default auth.reducer;
export const { clearNewUser } = auth.actions;
