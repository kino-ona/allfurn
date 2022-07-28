// 가격 노출
$(".label--unexposed").on("click", function () {
  if ($(".radio__box--type01 input").is(":checked") == true) {
    // $(".select-group__dropdown").addClass("active");
    $(".select-group__dropdown").slideDown("");
  }
});
$(".label--exposure").on("click", function () {
  // $(".select-group__dropdown").removeClass("active");
  $(".select-group__dropdown").slideUp("");
});

// 결제 방식
$(".label--payment04").on("click", function () {
  if ($(".radio__box--type01 input").is(":checked") == true) {
    $(".payment__input-wrap").slideDown("");
  }
});
$(".label--payment01, .label--payment02, .label--payment03").on(
  "click",
  function () {
    $(".payment__input-wrap").slideUp("");
  }
);
