

//header globalsearch
const header = $('.header');
const headerNavActive = 'globalsearch--active';

const navModal = $('.globalsearch-modal');
const navModalActive = 'globalsearch-modal--active';

const navCancel = $('.globalsearch-close');

const headerNav = () => {

	header.find(".textfield__search").on("propertychange change keyup paste click input", () => {
		$('body').addClass('noscroll');
		header.addClass(headerNavActive);
		navModal.addClass(navModalActive);

		const blank = document.querySelector('.globalsearch-modal.globalsearch-modal--active');
		if(blank === null) return; else {blank.addEventListener('click', () => { headerNavClose(); })};
	});
		
	navCancel.on('click', () => { headerNavClose(); });
}
headerNav();

const headerNavClose = () => {
	$('body').removeClass('noscroll');
	navModal.removeClass(navModalActive);
	header.removeClass(headerNavActive);
}

if(header.find('.globalsearch__banner .swiper-container').length > 0) {
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