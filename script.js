let autoChange = 1;

function changeColor(color1, color2, color3) {
  document.getElementById("redLight").style.background = color1;
  document.getElementById("yellowLight").style.background = color2;
  document.getElementById("greenLight").style.background = color3;
}

function autoChangeSystem(color1, color2, color3) {
  if (autoChange === 1) {
    document.getElementById("redLight").style.background = color1;
    document.getElementById("yellowLight").style.background = "#242424";
    document.getElementById("greenLight").style.background = "#242424";
    autoChange = 2;
    setTimeout(autoChangeSystem, 1000);
  } else if (autoChange === 2) {
    document.getElementById("redLight").style.background = color1;
    document.getElementById("yellowLight").style.background = color2;
    document.getElementById("greenLight").style.background = "#242424";
    autoChange = 3;
    setTimeout(autoChangeSystem, 1000);
  } else {
    document.getElementById("redLight").style.background = "#242424";
    document.getElementById("yellowLight").style.background = "#242424";
    document.getElementById("greenLight").style.background = color3;
    autoChange = 1;
    setTimeout(autoChangeSystem, 1000);
  }
}
