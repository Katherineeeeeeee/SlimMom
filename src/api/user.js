import { instance } from './auth';

export const axiosGetUser = async accessToken => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.get('/user');
  return data;
};
