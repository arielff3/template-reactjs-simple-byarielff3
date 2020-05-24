import axios from 'axios';

const api = () => {
  return axios.create({
    baseURL: '',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default api();
