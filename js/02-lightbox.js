import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class= "gallery_item">
        <a class="gallery_link" href="${original}">
            <img class="gallery_image" src="${preview}" alt="${description}" />
        </a>
    </li>`
).join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryList.addEventListener("click", event => {
    const SimpleLightbox (".gallery a", {
        // captions: true,
        // captionsType: "attr",
        captionsData: "alt",
        // captionPosition: "bottom", 
        captionDelay: 250,
        // download: false,
    });
// });