/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (tweet) {
  return `
    <article>
    <header class="makingtweets">
      <div class="tweet-username">
        <img src=${escape(tweet.user.avatars)}>
        <span>${escape(tweet.user.name)}</span>
        <span>${escape(tweet.user.handle)}</span>
      </div>
      <p class="thetweet"><b>${escape(tweet.content.text)}</b></p>
    </header>
    <footer class="footer-tweet">
      <span>${escape(tweet.created_at)}</span>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`
};

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

const loadTweets = function () {
  $('.error-char').text('BE IMAGINATIVE AND CONDENSE YOUR THOUGHTS TO 140 CHARACTERS!').hide();
  $('.error-none').text('WRITE SOMETHING! YOU HAVE 140 CHARACTERS!').hide();
  $.ajax('/tweets', {
    type: 'GET',
  }).then(function (tweet) {
    $('#tweets-container').empty();
    renderTweets(tweet);
  })
};

const submitTweets = function () {
  $("#thisform").on('submit', function (event) {
    $('.error-char').text('BE IMAGINATIVE AND CONDENSE YOUR THOUGHTS TO 140 CHARACTERS!').hide();
    $('.error-none').text('WRITE SOMETHING! YOU HAVE 140 CHARACTERS!').hide();
    event.preventDefault();
    if ($('#tweet-text').val().length > 140) {
      return $('.error-char').text('BE IMAGINATIVE AND CONDENSE YOUR THOUGHTS TO 140 CHARACTERS!').slideDown('slow');
    } else if (!$('#tweet-text').val()) {
      return $('.error-none').text('WRITE SOMETHING! YOU HAVE 140 CHARACTERS!').slideDown('slow');
    }
    $.ajax('/tweets', {
      type: "POST",
      data: $(this).serialize(),

    }).then(function (res) {
      loadTweets();
      $('#tweet-text').val('');
    })
  });
}

$(document).ready(() => {
  loadTweets();
  submitTweets();
});

