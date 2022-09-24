import instance from './auth';

export const axiosGetDailyRate = async userData => {
  const { data } = await instance.post('/daily-rate', userData);
  return data;
};

export const axiosGetDailyRateUser = async (id, userData) => {
  const { data } = await instance.post(`/daily-rate/${id}`, userData);
  return data;
};
