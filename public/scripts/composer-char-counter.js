$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let counterOneForty = 140
    let characterLength = $(this).val().length
    let presentValue = counterOneForty - characterLength
    $('.counter').text(presentValue).toggleClass('color-change', presentValue < 0);
  });

  $('.counter').css({
    'color': color
  });
}
)