// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

  $('.logo-letter').each(function () {
    const ths = $(this);
    ths.html(ths.html().replace('o', '<span>o</span>'));
  });

  $('.search-page__icon').click(function () {
    $('.search-page__field').stop().slideToggle();
    $('.search-page__field input[type=text]').focus();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $('.search-page__field').slideUp();
    }
  }).click(function () {
    $('.search-page__field').slideUp();
  });

  $('.search-page').click(function (e) {
    e.stopPropagation();
  });

});

