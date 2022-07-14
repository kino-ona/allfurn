$(document).ready(function () {

  function openModal(name) {
    $(`${name}`).css('display', 'block');
    $('body').css('overflow','hidden')
  };
  
  function closeModal (name) {
    $(`${name}`).css('display', 'none');
  }
})

$('.comment__like').on('click', function (event) {
	event.preventDefault();
	console.log();

	if(!$(this)[0].classList.contains('like--active')) {
		$(this).addClass('like--active');
		$(this).find("path").attr("fill", "#FB4760");
	}else {
		$(this).removeClass('like--active');
		$(this).find("path").attr("fill", "#BDBDBD");
	}
})


$(".textfield__search").on("propertychange change keyup paste input", function() {
	var currentVal = $(this).val();
	console.log(currentVal);
	
	if(!(currentVal === '')) { 
		$(".textfield").addClass('textfield--active');
	}else {
		$(".textfield").removeClass('textfield--active');
	}

	$(".textfield__icon--delete").on('click' , function() {
		$(this).prev().val('');
		$(".textfield").removeClass('textfield--active');
	})
});


// layer popup control
var ismodalOpen = false;
function modalOpen(layerId){
	var curPos = $(window).scrollTop();
	$('html').addClass('noscroll');
	$('#' + layerId).addClass('is-visible');
	var layerID = $('#' + layerId);
	layerID.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
	if($('[role="dialog"]:visible').length <= 1 && ismodalOpen == false) {
		$('.container').css('top',-curPos);
		ismodalOpen = true
	}
	var delay = setTimeout(function(){
		if(!$('html').hasClass('noscroll')){
			$('html').addClass('noscroll');
		}
		clearTimeout(delay);
	}, 50);
}
function modalClose(layerId){
	var curPos = -(parseInt($('.container').css('top')));
	$('#' + layerId).removeClass('is-visible');
	$('#' + layerId).attr('aria-hidden', 'true');
	$('html').removeClass('noscroll');
	if ($('[role="dialog"].is-visible').length < 1) {
		$('html').removeClass('noscroll').find('.container').css({'top':0});
		$(window).scrollTop(curPos);
		ismodalOpen = false;
	}
}