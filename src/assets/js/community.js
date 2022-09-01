if($('.container').hasClass('community')) {

  $(document).click(function(e){
    if($(e.target).hasClass('textfield__search')) {
      if($('.search-list').hasClass('active')) {
        $('.search-list').removeClass('active');
        $('.post-list').css('display','block');
      }else {
        $('.search-list').addClass('active');
        $('.post-list').css('display','none');
      }
    }
  });
  
  $('.search-list__action').on('click', function (event) {
    event.preventDefault();
    $('.search-list__item').remove();
  })
  
  $('.community-content__subscribe').on('click', function (event) {
    event.preventDefault();
    $('.community-content__subscribe').toggleClass('active');
    if($('.community-content__subscribe').hasClass('active')) {
      $('.community-content__subscribe i').attr('class', 'ico__community-arrow--active');
      $('.community-content__subscribe span').html('구독하기');
    } else {
      $('.community-content__subscribe i').attr('class', 'ico__community-arrow');
      $('.community-content__subscribe span').html('구독중');
    }
  })

  $('.community-comment__text').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.community-comment__wrap').find('.community-comment__recomment').css('display', 'block');

  })

  $('.recomment__cancle').on('click', function () {
    $(this).closest('.community-comment__recomment').css('display', 'none');
  })

  $('#modal-declaration textarea').on("propertychange change keyup paste input", function() {
    if( $('#modal-declaration textarea').val() != '') {
      $('#modal-declaration .footer button').addClass('active');
    }else {
      $('#modal-declaration .footer button').removeClass('active');
    }
  });

  $('#modal-declaration .footer button').on('click', function () {
    if($(this).hasClass('active')) {
      closeModal('#modal-declaration');
      openModal('#modal-declaration--done');
    }
  })
}


