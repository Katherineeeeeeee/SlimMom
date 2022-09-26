import instance from './auth';

export const axiosProductSearch = async query => {
  return await instance.get(`/product?search=${query}`);
};
