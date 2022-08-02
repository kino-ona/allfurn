$( function() {
  $.datepicker.setDefaults({
    dateFormat: 'yy.mm.dd',
    prevText: '',
    nextText: '',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    endDate: '0d',
    autoclose: true,

    onSelect: function(selectedDate) {
      if(!$(this).data().datepicker.first){
          $(this).data().datepicker.inline = true
          $(this).data().datepicker.first = selectedDate;
      }else{
          if(selectedDate > $(this).data().datepicker.first){
              $(this).val($(this).data().datepicker.first+" - "+selectedDate);
          }else{
            $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
          }
          $(this).data().datepicker.inline = false;
      }
    },
    
    onClose:function(){
      delete $(this).data().datepicker.first;
      $(this).data().datepicker.inline = false;
    }
  });


  $(function() {
    $('.my-page .calendar input').datepicker()
  
  });
});