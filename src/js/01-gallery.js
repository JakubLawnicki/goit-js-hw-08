import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemsArray = [];

galleryItems.forEach(item => {
  let listItem = document.createElement('li');
  itemsArray.push(listItem);
  listItem.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  );
});

gallery.append(...itemsArray);
gallery.addEventListener('click', clickImage);

function clickImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});
