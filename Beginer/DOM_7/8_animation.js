function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let poss = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (poss == 350) {
      clearInterval(id);
    } else {
      poss++;
      elem.style.top = poss + "px";
      elem.style.left = poss + "px";
    }
  }
}
