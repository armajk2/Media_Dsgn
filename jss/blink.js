var intervalId;
var hiddenPictures = document.querySelectorAll('.hidden-picture');
var revealedPictures = 0;
var isScreenBlack = false;

function toggleScreen() {
  var body = document.querySelector('body');

  if (!isScreenBlack) {
    body.classList.add('black-screen');
    hidePictures();
    isScreenBlack = true;
    setTimeout(function () {
      body.classList.remove('black-screen');
      isScreenBlack = false;
      revealNextPicture();
      if (revealedPictures >= hiddenPictures.length) {
        clearInterval(intervalId); // Stop the interval when all pictures are revealed
      }
    }, 1000); // Change the duration to 1 second (1000 milliseconds)
  } else {
    revealNextPicture();
    if (revealedPictures >= hiddenPictures.length) {
      clearInterval(intervalId); // Stop the interval when all pictures are revealed
    }
  }
}

function hidePictures() {
  for (var i = 0; i < hiddenPictures.length; i++) {
    hiddenPictures[i].style.display = 'none';
  }
}

function revealNextPicture() {
  if (revealedPictures < hiddenPictures.length) {
    hiddenPictures[revealedPictures].style.display = 'block';
    revealedPictures++;
  }
}

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function() {
    intervalId = setInterval(toggleScreen, 5000);
  }, 10000); // Start after 10 seconds (10000 milliseconds) of page load
});