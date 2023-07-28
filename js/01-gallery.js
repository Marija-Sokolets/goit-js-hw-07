import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((url) =>
    ` <li class="gallery__item">
        <a class="gallery__link" href=${url.original}">
          <img
            class="gallery__image"
            src="${url.preview}"
            data-source="${url.original}"
            alt="${url.description}"
          />
        </a>
      </li>`
).join("");


gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", galleryItemClick);

function galleryItemClick(event) {
    event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800", height="600">
  `);

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};



