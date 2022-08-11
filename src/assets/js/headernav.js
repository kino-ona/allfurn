

//header navigator
const header = $('.header');
const headerNavActive = 'navigator--active';

const navModal = $('.navigator-modal');
const navModalActive = 'navigator-modal--active';

const navCancel = $('.navigator-close');

const headerNav = () => {

	header.find(".textfield__search").on("propertychange change keyup paste click input", () => {
		$('.body').addClass('.noscroll');
		header.addClass(headerNavActive);
		navModal.addClass(navModalActive);

		const blank = document.querySelector('.navigator-modal.navigator-modal--active');
		if(blank === null) return; else {blank.addEventListener('click', () => { headerNavClose(); })};
	});
		
	navCancel.on('click', () => { headerNavClose(); });
}
headerNav();

const headerNavClose = () => {
	$('.body').removeClass('.noscroll');
	navModal.removeClass(navModalActive);
	header.removeClass(headerNavActive);
}

if(header.find('.navigator__banner .swiper-container').length > 0) {
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 3000,
		},
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: false,
		paginationClickable: false,
		keyboard: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}