import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '33588957-117fd113af84c86dc96acaa23';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
};

const getImages = async (searchQuery, page) => {
  const config = {
    params: {
      q: searchQuery,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data.hits;
};
export default getImages;
