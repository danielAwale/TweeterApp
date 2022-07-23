$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let characterLength = $(this).val().length
    let presentValue = 140 - characterLength
    $('.counter').text(presentValue).toggleClass('color-change', presentValue < 0);
  });
});