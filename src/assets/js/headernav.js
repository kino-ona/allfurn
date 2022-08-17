//header globalsearch
const header = $('#header');
const globalsearch = $('#globalsearch');

const headerNavActive = 'globalsearch--active';

const navModal = $('.globalsearch-modal');
const navModalActive = 'globalsearch-modal--active';

const navCancel = $('.globalsearch-close');

const headerNav = () => {

	header.find(".textfield__search").on("propertychange change keyup paste click input", () => {
		header.addClass(headerNavActive);
		globalsearch.addClass(headerNavActive);
		navModal.addClass(navModalActive);

		if(globalsearch.find('.globalsearch__banner .swiper-container').length > 0) {
			searchBanner();
		}
		gnbReset()

		const blank = document.querySelector('.globalsearch-modal.globalsearch-modal--active');
		if(blank === null) return; else {blank.addEventListener('click', () => { headerNavClose(); })};
	});

	navCancel.on('click', () => { headerNavClose(); });
}

const headerNavClose = () => {
	header.removeClass(headerNavActive);
	globalsearch.removeClass(headerNavActive);
	navModal.removeClass(navModalActive);
}

function searchBanner() {
		var swiper = new Swiper('#headerNavBanner', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			allowTouchMove: false,
			paginationClickable: false,
			keyboard: false,
			navigation: {
				nextEl: '.carousel-nav-next',
				prevEl: '.carousel-nav-prev',
			},
			pagination: {
				el: '#headerNavBanner .swiper-pagination',
				type: 'fraction',
				formatFractionCurrent: function (number) {
					let fraction = '0';
					if (number < 10) {
						return fraction + number;
					} else {
						return number;
					}
				},
				formatFractionTotal: function (number) {
					let fraction = '0';
					if (number < 10) {
						return fraction + number;
					} else {
						return number;
					}
				},
			},
			autoplay: {
				delay: 3000,
			},
			observer: true,
			observeParents: true,
		});
}

headerNav();

function gnbCategoryBanner() {
	var gnbSwiper = new Swiper('#eventkvSwipeHeader', {
		autoplay: {
			delay: 3000,
		},
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		paginationClickable: true,
		keyboard: true,
		speed: 400,
		pagination: {
			el: '#eventkvSwipeHeader .swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
// 카테고리 gnb
$(".gnb__menu li a").on("click", function () {
	if($(this).hasClass("active") === false) {
		$(this).addClass("active");
		$(".gnb__menu li a").not($(this)).removeClass("active");
	}

	if($(".category-select").hasClass("active") === true) {
		$(".gnb__category").css("display", "inline-block");
	} else {
		$(".gnb__category").css("display", "none");
	}
});
$(".gnb__category .category-wrap a").on("click", function () {
	if($(this).hasClass("active") === false) {
		$(this).addClass("active");
		$(".gnb__category .category-wrap a").not($(this)).removeClass("active");
	}

	if($(this).hasClass("active") === true) {
		$(".category-wrap--active").css("display", "block");
		$(".category-banner-wrap").css("display", "block");
	}

	if($('.category-banner .swiper-slide').length > 0) {
		gnbCategoryBanner();
	}
});
$(".gnb__category .category-wrap--active a").on("click", function () {
	if($(this).hasClass("active") === false) {
		$(this).addClass("active");
		$(".gnb__category .category-wrap--active a").not($(this)).removeClass("active");
	}
});

$(document).on('mouseenter mouseleave', '.gnb__category', function(event){
	if (event.type === 'mouseleave') {
		gnbReset();
	}
});

function gnbReset() {
	$(".gnb__category").css("display", "none");
	$(".gnb__menu li a").removeClass('active');
	$('.head__gnb .gnb__category li a').removeClass('active');
	$('.category-wrap--active').css("display", "none");
	$('.category-banner-wrap').css("display", "none");
}