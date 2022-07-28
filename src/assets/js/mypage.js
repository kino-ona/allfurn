// head 
$(".dropdown.dropdown--01").on("click", function () {
  $(this).toggleClass("dropdown--active");
  $(".dropdown.dropdown--02").removeClass("dropdown--active");
  $(".dropdown.dropdown--03").removeClass("dropdown--active");
});

$(".dropdown__item.dropdown__item--01").on("click", function (evnet) {
  evnet.preventDefault();
  $(".dropdown__title.dropdown__title--01").text(
    $(this).text().trim(" ").split("\n")[0]
  );
});

$(".dropdown.dropdown--02").on("click", function () {
  $(this).toggleClass("dropdown--active");
  $(".dropdown.dropdown--01").removeClass("dropdown--active");
  $(".dropdown.dropdown--03").removeClass("dropdown--active");
});

$(".dropdown__item.dropdown__item--02").on("click", function (evnet) {
  evnet.preventDefault();
  $(".dropdown__title.dropdown__title--02").text(
    $(this).text().trim(" ").split("\n")[0]
  );
});

// category-menu
$('.category-menu__title').on('click', function() {
	$('.category-menu').toggleClass('category-menu--active');
})

$('.category-menu__item').hover(function() {
	$('.category-menu__sub').removeClass('active');
	$(this).find('.category-menu__sub').addClass('active');
	if(!$(this).find('.category-menu__sub').hasClass('active')) {
		$('.category-menu__wrap').css('width', '250px');
	}else {
		$('.category-menu__wrap').css('width', '500px');
	}
})

$('.category-menu__sub-item').on('click', function() {
	if($(this).text().trim(' ') === '전체') {
		$('.category-menu__title a').html( $(this).closest('.category-menu__sub').prev().text());
	}else {
		$('.category-menu__title a').html( $(this).closest('.category-menu__sub').prev().text() + '>'+ $(this).text());
	}

	if($(this).text().trim(' ') === '일반소파') {
		$('.category-menu').removeClass('category-menu--active').addClass('select-menu');
		$('.category-filter').css('display', 'block').addClass('category-filter--active');
		$('.category-refresh').css('display', 'block');

		$('.category-refresh .category-filter__refresh').on('click', function () {
			$('.category-menu__title a').html('카테고리');
			$('.category-menu__item--active i').attr("class", $('.category-menu__item--active i').attr("class").split('--')[0])
			
			$('.category-refresh').css('display', 'none');
			$('.category-filter').css('display', 'none');
			$('.category-menu__item').removeClass('category-menu__item--active');
		});
	}

	$('.category-menu').removeClass('category-menu--active');

	$.each($('.category-menu__item i'),function (index, item) {
		item.classList = item.classList[0].split('--on')[0];
	})
	$('.category-menu__item').removeClass('category-menu__item--active');
	$(this).closest('.category-menu__sub').parent().addClass('category-menu__item--active');
	$(this).closest('.category-menu__sub').prev().find('i').attr('class', $(this).closest('.category-menu__sub').prev().find('i').attr("class") + '--on');
	
});

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