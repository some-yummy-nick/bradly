//= eventburrito.js
//= peppermint.js
//= slider.js
'use strict';
(function () {
  var slider = Peppermint(document.getElementById('peppermint'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    mouseDrag: true,
    stopSlideshowAfterInteraction: true
  });
  var slider2 = Peppermint(document.getElementById('peppermint2'), {
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    mouseDrag: true,
    stopSlideshowAfterInteraction: true
  });

})();