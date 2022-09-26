import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

export const axiosRegister = async userData => {
  const { data } = await instance.post('/auth/register', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogin = async userData => {
  const { data } = await instance.post('/auth/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogout = async accessToken => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.post('/auth/logout');
  instance.defaults.headers.Authorization = null;
  return data;
};

export const axiosRefresh = async (sid, refreshToken) => {
  instance.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  const { data } = await instance.post('/auth/refresh', sid);
  return data;
};

export default instance;
