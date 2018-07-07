$(document).ready(function() {
  $("nav")
    .find("a")
    .click(function(e) {
      if ($(this)[0].id !== "resume-nav") {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
          scrollTop: $(section).offset().top - $("nav").outerHeight() + 2
        });
      }
    });

  $("footer")
    .find("a")
    .click(function(e) {
      if ($(this)[0].id !== "resume-footer") {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
          scrollTop: $(section).offset().top - $("nav").outerHeight() + 2
        });
      }
    });

  $("#hero")
    .find("a")
    .click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top - $("nav").outerHeight() + 2
      });
    });

  $(document).scroll(function() {
    //get document scroll position
    var position = $(document).scrollTop();
    //get header height
    var header = $("nav").outerHeight();
    console.log(header);

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
