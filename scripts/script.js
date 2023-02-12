$(document).ready(function () {
  var maxHeight = 0;
  $(".carousel-inner .item").each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $(".carousel-container").height(maxHeight);
});
