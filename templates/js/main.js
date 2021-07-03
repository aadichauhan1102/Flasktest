$('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
