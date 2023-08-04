const cooker = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__counter");
cooker.onclick = function () {
  if (clickerStatus.textContent % 2 == 0) {
    cooker.width = 180;
  } else {
    cooker.width = 200;
  }
  clickerStatus.textContent++;
};