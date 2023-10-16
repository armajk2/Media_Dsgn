let container = document.getElementById("container");
let ball = document.getElementById("ball");
let target = document.getElementById("target");

ball.onmousedown = function (event) {
  //기능
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  // ball과 target이 만나는지 확인하는 함수 기능
  function check() {
    let ballPosition = ball.getBoundingClientRect();
    let targetPosition = target.getBoundingClientRect();

    if (
      ballPosition.left < targetPosition.right &&
      ballPosition.right > targetPosition.left &&
      ballPosition.top < targetPosition.bottom &&
      ballPosition.bottom > targetPosition.top
    ) {
      console.log("닿았음");
      target.style.backgroundColor = "white";
    } else {
      target.style.backgroundColor = "brown";
    }
  }

  document.onmousemove = function (event) {
    ball.style.left = event.pageX - shiftX + "px";
    ball.style.top = event.pageY - shiftY + "px";
    check();
  };

  ball.onmouseup = function () {
    document.onmousemove = null;
    ball.onmouseup = null;
  };
};


