
$( function() {
  var icons = {
    header: "ico__arrow--down24",
    activeHeader: "ico__arrow--up24"
  };
  $( ".accordion" ).accordion({
    header: ".accordion__head",
    icons: icons,
    collapsible: true,
    animate: 0
  });
  $( ".list .accordion" ).accordion({
    icons: false,
  });
});

$('.dropdown__item').on('click', function () {
  $('.dropdown__title').css('color', '#1B1B1B');
})

if ($('#allfurn-guide')) {
    let dataname;
    let title;
    $('.dropdown__item').on('click', function () {
        dataname = $(this).attr('data-name');
        title = $(this).text().trim(" ").split("\n")[0];
        console.log(title);
        $('section').find('h2 p').text(title);
        $('section').find('.guidance').attr('aria-hidden', 'true');
        $('section').find(`.guidance[data-name="${dataname}"]`).attr('aria-hidden', 'false');
    })
}