import instance from './auth';

export const axiosProductSearch = async query => {
  console.log(query);
  return await instance.get(`/product?search=${query}`);
};
