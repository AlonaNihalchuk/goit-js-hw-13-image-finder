import './sass/main.scss';
import getRefs from './js/refs';
import photoCardTpl from './templates/photo-card.hbs';
import PhotoApiService from './js/apiService';
const refs = getRefs();

const photoApiService = new PhotoApiService();

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onBtnClick);

// при новом запросе очищается галерея clearPhotoGallery() и сбрасывается страница photoApiService.resetPage(), делается запрос по новому слову, изображения не накапливаются, результат отображается в самом верху
async function onFormSubmit(e) {
  e.preventDefault();
  clearPhotoGallery();

  photoApiService.searchQuery = e.currentTarget.elements.query.value.trim();
  photoApiService.resetPage();
  if (photoApiService.searchQuery !== '') {
    const hits = await photoApiService.fetchPhotoCards();
    renderPhotoCard(hits);
    // photoApiService.fetchPhotoCards().then(renderPhotoCard);
  } else {
    alert('something went wrong');
  }
}
function renderPhotoCard(hits) {
  refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(hits));
}
async function onBtnClick() {
  const hits = await photoApiService.fetchPhotoCards();
  renderPhotoCard(hits);
  // photoApiService.fetchPhotoCards().then(renderPhotoCard);

  const element = document.getElementById('search-gallery');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
function clearPhotoGallery() {
  refs.galleryList.innerHTML = '';
}
