$(function () {
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let introH2 = intro.height();
  let scrollPos = $(window).scrollTop();

  $(window).on('scroll load resize', function () {
    introH = intro.innerHeight();
    introH2 = intro.height();

    scrollPos = $(this).scrollTop();

    if (scrollPos > introH - introH2) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // console.log(scrollPos);
});
