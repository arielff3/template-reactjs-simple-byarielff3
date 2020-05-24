import axios from 'axios';

const api = () => {
  return axios.create({
    baseURL: 'http://152.67.58.2:9000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default api();
