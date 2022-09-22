import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://slimmom-backend.goit.global',
});

export const axiosGetDailyRate = async userData => {
    const { data } = await instance.post('/daily-rate', userData);
    return data;
};