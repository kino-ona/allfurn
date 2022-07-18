
function openModal(name) {
	$(`${name}`).css('display', 'block');
	$('body').css('overflow','hidden')
};

function closeModal (name) {
	$(`${name}`).css('display', 'none');
}


// $('.comment__like').on('click', function (event) {
// 	event.preventDefault();

// 	if(!$(this)[0].classList.contains('like--active')) {
// 		$(this).addClass('like--active');
// 		$(this).find("path").attr("fill", "#FB4760");
// 	}else {
// 		$(this).removeClass('like--active');
// 		$(this).find("path").attr("fill", "#BDBDBD");
// 	}
// })

//검색창
$(".textfield__search").on("propertychange change keyup paste input", function() {
	var currentVal = $(this).val();

	if(!(currentVal === '')) { 
		$(this).parent().addClass('textfield--active');
	}else {
		$(this).parent().removeClass('textfield--active');
	}
	
	$(".textfield__icon--delete").on('click' , function() {
		$(this).prev().val('');
		$(".textfield").removeClass('textfield--active');
	})
});

//bookmark
$('.card__bookmark').on('click', function () {
	let bookMarkImg = $(this).children('img');
	
	$(this).toggleClass('card__bookmark--active');

	if($(this).hasClass('card__bookmark--active')) {
		bookMarkImg.attr("src", "../assets/images/temp/ico_bookmark_on@2x.png");
		bookMarkImg.attr("alt", "스크랩 on");
	}else {
		bookMarkImg.attr("src", "../assets/images/temp/ico_bookmark_off@2x.png");
		bookMarkImg.attr("alt", "스크랩 off");
	}	
})

//filter
$('.category-filter__arrow').on('click', function  () {
	if($(this).closest('.category-filter__item').hasClass('category-filter__item--active')) {
		$('.category-filter__item').removeClass('category-filter__item--active');
	}else {
		$('.category-filter__item').removeClass('category-filter__item--active');
		$(this).closest('.category-filter__item').toggleClass('category-filter__item--active');
	}
})

$('.category-filter__item button').on('click', function () {
	$(this).closest('p').toggleClass('select-button');
	
	if($(this).closest('p').hasClass('select-button')) {
		$('.category-filter__footer').append(`<a href="#"><span>` + $(this).text() + `</span></a>`);
	}else {
		console.log($(this));
		$('.category-filter__footer a').remove($(this));
	}
	// else {
	// 	

	// 	Array($('.category-filter__box .select-button')).forEach(element => {
	// 		console.log(element.text());
	// 		$('.category-filter__footer').append( `<a href="#"><span>` + element.text() + `</span></a>`);
	// 	});
	// }
});

$('.category-filter__footer a').on('click', function () {
	console.log($(this));
	$('.category-filter__footer a').remove($(this));
})







