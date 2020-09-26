$(document).ready(function() {
  $("nav")
    .find("a")
    .click(function(e) {
      if ($(this)[0].id !== "resume-nav") {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
          scrollTop: $(section).offset().top
        });
      }
    });

    // - $("nav").outerHeight()

  $("footer")
    .find("a")
    .click(function(e) {
      if ($(this)[0].id !== "resume-footer") {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
          scrollTop: $(section).offset().top
        });
      }
    });

  $("#hero")
    .find("a")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  $(document).scroll(function() {
    //get document scroll position
    var position = $(document).scrollTop();

    //get header height
    var header = $("nav").outerHeight();
    
    if (position > header) {
      $('.navbar').css('padding', '0');
      $('.navbar').addClass('navbar-light');
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').addClass('bg-light');
    } else {
      $('.navbar').css('padding', '1rem 1rem');
      $('.navbar').addClass('navbar-dark');
      $('.navbar').removeClass('navbar-light');
      $('.navbar').removeClass('bg-light');
    }
    //check active section
    $(".section").each(function(i) {
      if ($(this).position().top <= position + header) {
        $("a.active")
          .removeClass("active")
          .blur();
        $(".nav-link")
          .eq(i)
          .addClass("active");
      }
    });
  });
});
