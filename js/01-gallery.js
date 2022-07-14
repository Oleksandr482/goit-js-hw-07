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
    console.log('link -->', largeImageSrc);
  
  openModal(largeImageSrc)
  
}

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
    
    // console.log(galleryMarkup);
}
function openModal(sourse) {
  const instance = basicLightbox.create(`
    <img src="${sourse}" width="800" height="600">
`)
  instance.show();

  closeModal(instance);
}

function closeModal(arg) {
  if (document.querySelector('.basicLightbox__placeholder')) {
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        arg.close();
      }
    }, {once: true})
  }
}
