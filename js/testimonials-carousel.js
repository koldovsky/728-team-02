var swiper = new Swiper(".swiper", {
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: false,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});