// like & bookmark
$(".my__info .my__like").on("click", function (evnet) {
  $(this).toggleClass("active");
});

$(".card__bookmark").on("click", function () {
  let bookMarkImg = $(this).children("i");
  let bookMarkspan = bookMarkImg.children("span");

  $(this).toggleClass("card__bookmark--active");

  if ($(this).hasClass("card__bookmark--active")) {
    bookMarkImg.attr("class", "ico__bookmark24--on");
    bookMarkspan.text("스크랩 on");
  } else {
    bookMarkImg.attr("class", "ico__bookmark24--off");
    bookMarkspan.text("스크랩 off");
  }
});

function openModal(name) {
	console.log('test');
	$(`${name}`).css('display', 'block');
	$('body').css('overflow', 'hidden');
}

function closeModal(name) {
	$(`${name}`).css('display', 'none');
	$('body').css('overflow', '');
}

//filter
$('.category-filter__item button').on('click', function () {
	$(this).closest('p').toggleClass('select-button');
	$('.category-filter__footer').addClass('active');
	
	if($(this).closest('p').hasClass('select-button')) {
		$('.category-filter__data').append(`<button type='button'><span>` + $(this).text() + `</span></button>`);
	}else {
		$('.category-filter__data').innerHTML = $(this);
	}
});

$('.category-filter__title').on('click', function (event) {
	event.preventDefault();
	$('.category-filter__footer').removeClass('active');
	$('.category-filter').toggleClass('category-filter--active');
})

$('.category-filter__refresh').on('click' , function () {
	$('.category-filter__data button').remove();
	$('.category-filter__footer').removeClass('active');
	$('.category-filter__box p').removeClass('select-button');
	if ($('.category-data').length > 0) {
		$('.category-data').css({'border': '0', 'height': 0});
		$('.category-data__wrap button').remove();
	}
	if ($('.category-type').length > 0) {
		$('.category-type__item > a').removeClass('active');
		$('.category-type__item > a i').attr('class', 'ico__arrow--down14');
	}
	if ($('[class*="modal-category"]').length > 0) {
		$('[class*="modal-category"]').find('input').prop('checked', false);
	}
})

$('.buttons-refresh').on('click' ,function() {
	$('.category-type__item > a').removeClass('active');
	$('.category-type__item > a i').attr('class', 'ico__arrow--down14');
	$(this).closest('.modal').find('input').prop('checked', false);
})

$('.buttons-search').on('click', function () {
	$('.category-data__wrap').html('');
	$('.category-data').css('border', '1px solid #E0E0E0');

	for ( var i = 0; i < $(".modal-category input").length; i++) {
		if ($(".modal-category input:checkbox")[i].checked === true ) {
			$('.category-type__item-1').addClass('active');
			$('.category-type__item-1 i').attr('class', 'ico__arrow--down14-red')
			$('.category-data__wrap').append(`<button type='button'><span>` + $('#' + $(".modal-category input:checkbox")[i].id).next('span').text() +`</span></button>`)
		}
	}

	for ( var i = 0; i < $(".modal-category-2 input").length; i++) {
		if ($(".modal-category-2 input:checkbox")[i].checked === true ) {
			$('.category-type__item-2').addClass('active');
			$('.category-type__item-2 i').attr('class', 'ico__arrow--down14-red')
			$('.category-data__wrap').append(`<button type='button'><span>` + $('#' + $(".modal-category-2 input:checkbox")[i].id).next('span').text() +`</span></button>`)
		}
	}

	if ($('.category-data__wrap button').length > 0) {
		$('.category-data').css({'border': '1px solid #E0E0E0', 'height': 'auto'});
		$('.category-filter__refresh').addClass('active');
	} else {
		$('.category-data').css({'border': 0, 'height': 0});
		$('.category-filter__refresh').removeClass('active');
	}
})

$(".category-btn.registration-order-btn").on("click", function () {
	var btnText = $(this).children(".category-btn__text");

	if ( btnText.text() == "최근 등록순") {
		btnText.text("등록순");
	} else {
		btnText.text("최근 등록순");
	}
});

$(".order-info__title").on("click", function () {
  $(this).toggleClass("active");
});

$(".password__button").on("click", function () {
  $(".password__container").slideDown("");
});
$(".password__cancel").on("click", function () {
  $(".password__container").slideUp("");
});

//cate click
$('.sub-category .sub-category__item').on("click", function() {
	$('.sub-category .sub-category__item').removeClass("sub-category__item--active");
	$(this).addClass("sub-category__item--active");
});

const cate = document.querySelector('.sub-category');
const cateItems = document.querySelectorAll('.sub-category .sub-category__item');
let cateIdxW = 0;
let itemLength = cateItems.length;

const CateClickToScroll = () => {
	let target;
	let oL;
	cateItems.forEach(i => {
		cateIdxW += i.clientWidth + 24;
		if (cateIdxW > 916) { 
			i.addEventListener('click', (e) => {
				target = e.target;
				oL = target.offsetLeft;
				cate.scrollLeft = oL/2;
			})
		} else {
			i.addEventListener('click', (e) => {
				target = e.target;
				oL = target.offsetLeft;
				cate.scrollLeft = -oL/2;
			})
		}
	})
}
CateClickToScroll();