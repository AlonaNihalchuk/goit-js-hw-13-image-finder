import './sass/main.scss';
import getRefs from './js/refs';
import photoCardTpl from './templates/photo-card.hbs';
import PhotoApiService from './js/apiService';
const refs = getRefs();

console.log(refs.loadMoreBtn);
const photoApiService = new PhotoApiService();

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onBtnClick);

async function onFormSubmit(e) {
  e.preventDefault();
  clearPhotoGallery();

  photoApiService.searchQuery = e.currentTarget.elements.query.value.trim();
  photoApiService.resetPage();
  if (photoApiService.searchQuery !== '') {
    const hits = await photoApiService.fetchPhotoCards();
    const renderCard = await renderPhotoCard(hits);
    // photoApiService.fetchPhotoCards().then(renderPhotoCard);
  } else {
    alert('something went wrong');
  }
}
function renderPhotoCard(hits) {
  refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(hits));
}
async function onBtnClick() {
  if (photoApiService.searchQuery === '') {
    const hits = await photoApiService.fetchPhotoCards();
    const renderCard = await renderPhotoCard(hits);
    // photoApiService.fetchPhotoCards().then(renderPhotoCard);

    const element = document.getElementById('search-gallery');
    console.log(element);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  } else {
    alert('something went wrong');
  }
}
function clearPhotoGallery() {
  refs.galleryList.innerHTML = '';
}
