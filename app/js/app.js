// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import '../libs/likely/dist/likely.js';


document.addEventListener('DOMContentLoaded', () => {

  $('.logo-letter').each(function () {
    const ths = $(this);
    ths.html(ths.html().replace('o', '<span>o</span>'));
  });

//
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

//
  $('.header').after('<div class="main-nav--mobile"></div>');
  $('.header .main-nav__list').clone().appendTo('.main-nav--mobile');
  $('.main-nav__burger').click(function () {
    $('.main-nav--mobile').stop().slideToggle();
  });


//
  /*
  function blockClickDrop(clickBlock, dropBlock, blockWrap) {
    $(clickBlock).click(function () {
      $(dropBlock).stop().slideToggle();
      $(dropBlock + ' input[type=text]').focus();
    });

    $(document).keyup(function (e) {
      if (e.keyCode === 27) {
        $(dropBlock + '[style="display: block;"]').slideUp();
      }
    }).click(function () {
      $(dropBlock + '[style="display: block;"]').slideUp();
    });

    $(blockWrap).click(function (e) {
      e.stopPropagation();
    });
  }

  blockClickDrop('.search-page__icon', '.search-page__field', '.search-page')
  blockClickDrop('.main-nav__burger', '.main-nav--mobile', '.main-nav')
  */
});

