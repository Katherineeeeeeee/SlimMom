import { instance } from './auth';

export const axiosDay = async userData => {
  const { data } = await instance.post('/day', userData);
  return data;
};

export const axiosDayInfo = async userData => {
  const { data } = await instance.post('/day/info', userData);
  return data;
};

export async function axiosDeleteDay(data, accessToken) {
  const serverData = await fetch('https://slimmom-backend.goit.global/day', {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  });
  return serverData.json();
}
