function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;

  id = setInterval(frame, 20);

  function frame() {
    if (pos == 350) {
      pos = 0
    } else {
      pos++;
    }
    
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";
  }
}
