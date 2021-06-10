export default function getRefs() {
  return {
    // body: document.querySelector('body'),
    galleryList: document.querySelector('.gallery'),
    searchForm: document.querySelector('#search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  };
}
