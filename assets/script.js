window.onload = function () {
  // force preload
  var preloadImages = function () {
    for (var i = 1; i <= 5; i++) {
      var img = new Image();
      img.src = './assets/img/a' + i + '.png';
    }
    for (var i = 1; i <= 7; i++) {
      var img = new Image();
      img.src = './assets/img/b' + i + '.png';
    }
  };
  preloadImages();

  var curtains = document.getElementById('curtains');
  var slashes = document.getElementById('slashes1');
  var yangmaster = document.getElementById('yangmaster1');
  var ninja = document.getElementById('ninja1');

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if (!isChrome) {
    // curtains.innerHTML = '<h1>Please use Google Chrome for the best experience :&lt;</h1>';
    yangmaster.id = 'yangmaster-non-chrome';
    ninja.style.display = 'none';

    var nonChromeWarning = document.getElementById('non-chrome-warning');
    nonChromeWarning.style.display = 'inherit';
  } else {
    slashes.id = 'slashes';
    yangmaster.id = 'yangmaster';
    ninja.id = 'ninja';
  }

  curtains.style.display = 'none';
};