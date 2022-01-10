import axios from 'axios';

export const getUsers = () => {
    console.log('huh');
  return axios.get('/users', {
    params: {
      total: 1000,
      per_page: 12
    }
  });
};
