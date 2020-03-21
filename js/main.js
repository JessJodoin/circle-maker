$('html').on('keydown', function (e) {

  var $circle = $('<div>').addClass('ball');
  var randLeft = Math.random() * 1500;
  var randTop = Math.random() * 1500;

  $('body').append($circle);
  $circle.css('left', randLeft);
  $circle.css('top', randTop);
});
