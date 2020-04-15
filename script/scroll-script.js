/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});
/*Scroll to top when arrow up clicked END*/

// scroll to id
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
// scroll to id end
