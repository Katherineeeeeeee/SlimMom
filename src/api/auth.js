import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

export const axiosGetDailyRate = async userData => {
  const { data } = await instance.post('/daily-rate', userData);
  return data;
};

export const axiosRegister = async userData => {
  const { data } = await instance.post('/auth/register', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogin = async userData => {
  const { data } = await instance.post('/auth/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  console.log(data);
  return data;
};

export const axiosLogout = async () => {
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
