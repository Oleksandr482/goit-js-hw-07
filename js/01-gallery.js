import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
}

createGalleryItems();

refs.gallery.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const largeImageSrc = evt.target.dataset.source;
  
  openModal(largeImageSrc)
  
};

function createGalleryItems() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')
    refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
    

};
function openModal(sourse) {
  const instance = basicLightbox.create(`
    <img src="${sourse}" width="800" height="600">
`, {
    onShow: () => { document.addEventListener('keydown', onKeyDownEscape); console.log('Поставив слухача!') },
  onClose: () => { document.removeEventListener('keydown', onKeyDownEscape);  console.log('Зняв слухача!')}})
  instance.show();
  
  function onKeyDownEscape(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
}
};

