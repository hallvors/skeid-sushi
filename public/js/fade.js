document.addEventListener("DOMContentLoaded", function (evt) {
  var slideParent = document.getElementsByClassName("slides")[0];
  var slides = slideParent.getElementsByTagName('div');
  var current =
    location.hash && location.hash.indexOf("#slide-") === 0
      ? parseInt(location.hash.split("-")[1])
      : 0;
  setInterval(function () {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    location.hash = '#slide-' + current;
  }, 9000);
});
