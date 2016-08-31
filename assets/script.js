window.onload = function () {
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