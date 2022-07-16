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
  
  new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
    })
};

function createGalleryItems() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
}).join('')
    refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
};

