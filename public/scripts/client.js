/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {
  return `
    <article>
    <header class="makingtweets">
      <div class="tweet-username">
        <img src=${tweet.user.avatars}>
        <span>${tweet.user.name}</span>
        <span>${tweet.user.handle}</span>
      </div>
      <p class="thetweet"><b>${tweet.content.text}</b></p>
    </header>
    <footer class="footer-tweet">
      <span>${tweet.created_at}</span>
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
  $.ajax('/tweets', {
    type: 'GET',
  }).then(function (tweet) {
    console.log(tweet);
    renderTweets(tweet);
  })
};

const submitTweets = function () {
  $("#thisform").on('submit', function (event) {
    event.preventDefault();
    $.ajax('/tweets', {
      type: "POST",
      data: $(this).serialize()
    }).then(function (res) {
      $('#tweets-container').empty();
      loadTweets();
    })
  });
}

$(document).ready(() => {
  loadTweets();
  submitTweets();
});

