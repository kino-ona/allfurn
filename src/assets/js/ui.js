$(document).ready(function () {

})


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