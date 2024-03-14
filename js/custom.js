$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 5, // Number of items to display
    loop: true, // Loop through items
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds)
    autoplayHoverPause: true, // Pause autoplay on hover
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },

      1024: {
        items: 5
      },

      1366: {
        items: 5
      }
    }
  });

  $("#tile-1 .nav-tabs a").click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
      $("#tile-1 .slider").css({"left":+ position.left,"width":width});
  });
  var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
  var actPosition = $("#tile-1 .nav-tabs .active").position();
  $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});
  
});



