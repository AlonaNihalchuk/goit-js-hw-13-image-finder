import './sass/main.scss';
import getRefs from './js/refs';
import photoCardTpl from './templates/photo-card.hbs';
import API from './js/apiService';
const refs = getRefs();

// refs.galleryList.innerHTML;
// console.log(refs.body);

refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const searchPhoto = e.currentTarget.elements.query.value.trim();
  API.fetchPhotoCards(searchPhoto).then(console.log);
}
