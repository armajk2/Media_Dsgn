// 페이지가 열리면 계속해서 실행될 기능 정의
window.onload = function () {
  // "hiddenImg"라는 id를 가진 요소를 "img"라고 이름 지어줌
  const img = document.getElementById("hiddenImg");
  // "isIn"의 값은 "거짓"이라고 정의해줌
  let isIn = false;
  // img에 마우스 커서를 올리면 isIn의 값은 "참"으로 바뀜
  img.addEventListener("mouseover", function () {
    isIn = true;
  });
  // img에 마우스 커서가 없으면 isIn의 값은 "거짓"으로 바뀜
  img.addEventListener("mouseout", function () {
    isIn = false;
  });
  // img 안에서 마우스를 움직이고, isIn의 값이 "참"이면, img의 --x, --y 값(css 39행 참고)에 커서의 현재 위치 값을 대입
  img.addEventListener("mousemove", function () {
    if (isIn) {
      img.style.setProperty("--x", event.clientX + "px");
      img.style.setProperty("--y", event.clientY + "px");
    }
  });
};