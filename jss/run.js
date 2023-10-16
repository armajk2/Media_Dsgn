// 환경 고치는 코딩//

var cursorElement = document.getElementById('cursor');
// var obstacleElement = document.getElementById('mask3');

var obstacleElement = document.getElementById('mask1');

var overlayElement = document.getElementById('overlay');
var popupElement = document.getElementById('popup');
var isCollided = false;

// 특정 이미지에 마우스가 닿았을 때 처리
function handleCollision() {
  overlayElement.style.display = 'block';
  setTimeout(function() {
    popupElement.style.display = 'block';
  }, 2000);
  isCollided = true;
}

// 마우스 이동 처리
function handleMouseMove(e) {
  var x = e.clientX;
  var y = e.clientY;

  cursorElement.style.left = x + 'px';
  cursorElement.style.top = y + 'px';

  // 특정 이미지와 충돌 체크
  var cursorRect = cursorElement.getBoundingClientRect();
  var obstacleRect = obstacleElement.getBoundingClientRect();

  if (
    cursorRect.left < obstacleRect.right &&
    cursorRect.right > obstacleRect.left &&
    cursorRect.top < obstacleRect.bottom &&
    cursorRect.bottom > obstacleRect.top
  ) {
    if (!isCollided) {
      handleCollision();
    }
  } else {
    isCollided = false;
  }
}




const textBoxes = document.querySelectorAll('.textbox');

function showNextTextBox(currentIndex) {
  const currentTextBox = textBoxes[currentIndex];
  const nextTextBox = textBoxes[currentIndex + 1];

  if (currentTextBox && nextTextBox) {
    currentTextBox.classList.remove('visible');
    currentTextBox.classList.add('hidden');
    nextTextBox.classList.remove('hidden');
    nextTextBox.classList.add('visible');
  }
}

textBoxes[0].classList.add('visible');

for (let i = 0; i < textBoxes.length; i++) {
  textBoxes[i].addEventListener('mouseover', function () {
    showNextTextBox(i);
  });
}