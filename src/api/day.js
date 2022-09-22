//need to add token

import { instance } from './auth';

export const axiosDay = async userData => {
  const { data } = await instance.post('/day', userData);
  return data;
};

export const axiosDeleteDay = async userDataId => {
  const { data } = await instance.delete('/day', userDataId);
  return data;
};

export const axiosDayInfo = async userData => {
  const { data } = await instance.post('/day/info', userData);
  return data;
};
