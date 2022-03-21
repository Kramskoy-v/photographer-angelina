'use strict'

let modalWindow = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function () {
	modalWindow.classList.remove('modal--active');
	modalAbout.classList.remove('modal__desc-about--active');
	modalGallery.classList.remove('modal__gallery--active');
});

function openModalWindow() {
	modalWindow.classList.add('modal--active');
}

//Окно "Обо мне"
const modalAbout = document.querySelector('.modal__desc-about'),
	infoAboutwatch = document.querySelector('.about__info-watch');

function openModalAbout() {
	modalAbout.classList.add('modal__desc-about--active');
}

infoAboutwatch.addEventListener('click', () => {
	openModalWindow();
	openModalAbout();
})

//Окно галереи
const modalGallery = document.querySelector('.modal__gallery'),
	infoGalleryWatch = document.querySelector('.gallery__info-watch');

function openModalGallery() {
	modalGallery.classList.add('modal__gallery--active');
}

infoGalleryWatch.addEventListener('click', () => {
	openModalWindow();
	openModalGallery();
})

//Swiper
const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});