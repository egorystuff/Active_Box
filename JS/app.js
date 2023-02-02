$(function () {
  // fixed header
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let introH2 = intro.height();
  let scrollPos = $(window).scrollTop();

  let nav = $('#nav'); //for navToggle
  let navToggle = $('#navToggle'); //for navToggle

  checkScroll(scrollPos, introH);

  $(window).on('scroll  resize', function () {
    introH = intro.innerHeight();
    introH2 = intro.height();

    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH - introH2) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // smooth scroll
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass('show');

    $('html, body').animate(
      {
        scrollTop: elementOffset - 70,
      },
      500
    );
  });

  // navToggle

  navToggle.on('click', function (event) {
    event.preventDefault();

    nav.toggleClass('show');
  });

  // console.log(elementOffset);
});
