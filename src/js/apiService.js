const API_KEY = '22013232-1b441b98e0c24c670c21c6cac';
const BASE_URL = 'https://pixabay.com/api/';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };
export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }
  fetchPhotoCards(name) {
    return fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.increment();
        return hits;
      });
  }
  increment() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
