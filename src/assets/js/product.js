$(".product-bookmark").on("click", function () {
  $(this).toggleClass("active");
});

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
$(".dropdown.dropdown--03").on("click", function () {
  $(this).toggleClass("dropdown--active");
  $(".dropdown.dropdown--01").removeClass("dropdown--active");
  $(".dropdown.dropdown--02").removeClass("dropdown--active");
});
$(".dropdown__item.dropdown__item--03").on("click", function (evnet) {
  evnet.preventDefault();
  $(".dropdown__title.dropdown__title--03").text(
    $(this).text().trim(" ").split("\n")[0]
  );
});

$(".order-info__title").on("click", function () {
  $(this).toggleClass("active");
});

function openModal(name) {
  $(`${name}`).css('display', 'block');
  $('body').css('overflow', 'hidden');
};

function closeModal (name) {
  $(`${name}`).css('display', 'none');
  $('body').css('overflow', 'initial');
}

$('.category-modal').on('click', function() {
  openModal('#category-modal');
});
