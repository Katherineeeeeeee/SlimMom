import { instance } from './auth';

export const axiosGetDailyRate = async userData => {
  const { data } = await instance.post('/daily-rate', userData);
  return data;
};
