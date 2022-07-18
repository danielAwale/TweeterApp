$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let counterValue = 140
    let characterLength = $(this).val().length
    let presentValue = counterValue - characterLength
    $('.counter').text(presentValue).toggleClass('warning', presentValue < 0)
   
  })
})