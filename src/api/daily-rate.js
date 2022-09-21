import instance from './auth';

export const axiosDailyRate = async data => {
  console.log(data);
  return await instance.post('/daily-rate', data);
};
