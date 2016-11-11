// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  
  function getCalls() {
    console.log("getting calls");
    $.get('/calls').done(function(data) {
      console.log("got calls");
      $('main').append('<p><tt>' + (new Date()) + ': ' + JSON.stringify(data) + '</tt></p>');
    });
    console.log("waiting 3s");
    setTimeout(getCalls, 3000);
  }
  
  getCalls();
});
