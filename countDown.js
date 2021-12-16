let minDisp = document.getElementById("min");
let secDisp = document.getElementById("sec");
let first = document.querySelector("#fIn");
let second = document.querySelector("#sIn");
let ppbtn = document.getElementById("PlayPauseBtn");
let Outline = document.querySelector(".x-sc");
ppbtn.innerHTML = "Play";
minDisp.innerHTML = "0";
secDisp.innerHTML = "00";
let secPerMinute = "59";
let newSecVal, myset;
let isPlayPressed = false;
let isPausedPressed = false;

function Play(value) {
  if (value == "Reset") {
    clearInterval(myset);
    secDisp.innerHTML = "00";
    minDisp.innerHTML = "0";
    ppbtn.innerHTML = "Play";

    return;
  }

  if (value == "Stop") {
    clearInterval(myset);
    return;
  }

  if (value == "Pause") {
    clearInterval(myset);
    newSecVal == secDisp.innerHTML;
    ppbtn.innerHTML = "Play";
    isPausedPressed = true;
    return;
  }

  if (value == "Play") {
    console.log(value);
    isPlayPressed = true;
  }

  if (isPlayPressed) {
    ppbtn.innerHTML = "Pause";
  }

  hold();
}

function hold(params) {
  console.log(first.value);
  if (first.value == "") {
    alert("please enter a value");
  } else {
    myset = setInterval(show, 1000);
  }
}

function input(params) {
  if (params == "fIn") {
    minDisp.innerHTML = first.value;
  } else if (params == "sIn") secDisp.innerHTML = second.value;
}

function show() {
  secDisp.innerHTML -= 1;
  if (secDisp.innerHTML == -1) {
    minDisp.innerHTML -= 1;
    secDisp.innerHTML = secPerMinute;
    clearInterval(myset);
    Play();
    Outline.classList.toggle("x-sr");
  }

  if (minDisp.innerHTML == "0" && secDisp.innerHTML == "0") {
    clearInterval(myset);
    minDisp.innerHTML = "TIME";
    secDisp.innerHTML = "OUT";
  }
}
