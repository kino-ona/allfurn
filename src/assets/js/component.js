
 function openModal(name) {
    $(`${name}`).css('display', 'block');
    $('body').css('overflow','hidden');
  };
  
  function closeModal (name) {
    $(`${name}`).css('display', 'none');
    $('body').css('overflow','');
  }

  $('.modal-type--single').on('click', function() {
   openModal('#modal-type--single');
  });

  $('.modal-type--pair').on('click', function() {
    openModal('#modal-type--pair');
  });

  $('.modal-type--basic').on('click', function() {
    openModal('#modal-type--basic');
  });

  $('.modal-close').on('click', function (event) {
    event.preventDefault();
    closeModal('#modal-type--basic');
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
