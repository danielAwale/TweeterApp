$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let characterLength = $(this).val().length
    let counterValue = 140
    let presentValue = counterValue - characterLength
    $('.counter').text(presentValue).toggleClass('warning', presentValue < 0)
   
  })
})