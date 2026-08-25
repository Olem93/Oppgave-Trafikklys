let autoChange = 1;
let timeOut;
let seconds = 1000;

function changeColor(color1, color2, color3) {
  document.getElementById("redLight").style.background = color1;
  document.getElementById("yellowLight").style.background = color2;
  document.getElementById("greenLight").style.background = color3;
}

function autoChangeSystem() {
  if (autoChange === 1) {
    document.getElementById("redLight").style.background = "red";
    document.getElementById("yellowLight").style.background = "#242424";
    document.getElementById("greenLight").style.background = "#242424";
    autoChange = 2;
    seconds = 5000;
  } else if (autoChange === 2) {
    document.getElementById("redLight").style.background = "red";
    document.getElementById("yellowLight").style.background = "yellow";
    document.getElementById("greenLight").style.background = "#242424";
    autoChange = 3;
    seconds = 1000;
  } else if (autoChange === 3) {
    document.getElementById("redLight").style.background = "#242424";
    document.getElementById("yellowLight").style.background = "#242424";
    document.getElementById("greenLight").style.background = "green";
    autoChange = 4;
    seconds = 5000;
  } else {
    document.getElementById("redLight").style.background = "#242424";
    document.getElementById("yellowLight").style.background = "yellow";
    document.getElementById("greenLight").style.background = "#242424";
    autoChange = 1;
    seconds = 2000;
  }
  timeOut = setTimeout(autoChangeSystem, seconds);
}

function stopTimeout() {
  clearTimeout(timeOut);
}
