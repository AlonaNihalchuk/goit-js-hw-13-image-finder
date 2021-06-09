const API_KEY = '22013232-1b441b98e0c24c670c21c6cac';
const BASE_URL = 'https://pixabay.com/api/';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};
function fetchPhotoCards(name) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${name}&page=1&per_page=12&key=${API_KEY}`,
  ).then(response => response.json());
}
export default { fetchPhotoCards };
