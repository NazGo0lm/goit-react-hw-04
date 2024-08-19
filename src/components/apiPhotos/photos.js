import axios from 'axios';

const API_KEY = 'dzPcz4dggrI6GrEMTe4k_fERqskM-CQSAC2HWIjGAu4';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}&client_id=${API_KEY}`);
  //console.log(data);
  return data;
};