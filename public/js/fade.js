(function () {
  let currentSlideIndex;
  let interval;

  function nextSlide() {
    var slideParent = document.getElementsByClassName("slides")[0];
    var slides = slideParent.getElementsByTagName("div");
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    location.hash = "#slide-" + currentSlideIndex;
    window.scrollTo(0, 0);
  }

  function resetInterval() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(nextSlide, 9000);
  }

  document.addEventListener("DOMContentLoaded", function (evt) {
    currentSlideIndex =
      location.hash && location.hash.indexOf("#slide-") === 0
        ? parseInt(location.hash.split("-")[1])
        : 0;
    interval = setInterval(nextSlide, 9000);
  });

  document.addEventListener('click', resetInterval, true);
  document.addEventListener('mousemove', resetInterval, true);
  document.addEventListener('touchmove', resetInterval, true);
})();
