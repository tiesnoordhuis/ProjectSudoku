/*
comments

7-2-2018
geschreven door Ties Noordhuis

*/
function checkCode() {
  var x = document.getElementById("codeInput").value;
  if (x == "18") {
    document.getElementById("titleDiv").innerHTML = "succes!";
    hide(1);
    document.getElementById("body").style.backgroundImage = "url('images/boordcomputer2.jpg')";
    setTimeout(newScreen, 1000);
  } else {
    document.getElementById("titleDiv").innerHTML = "FOUT!";
    document.getElementById("codeInput").value = "";
    document.getElementById("body").style.backgroundImage = "url('images/boordcomputer3.jpg')";
  }
}

function newScreen() {
  document.getElementById("planetPicker").style.display = "block";
  document.getElementById("body").style.backgroundImage = "url('images/placeholderPlanetPicker.jpg')";
}

function hide(n) {
  if (n = 1) {
    document.getElementById("codeInput").style.display = "none";
    document.getElementById("codeInputButton").style.display = "none";
  }
}

function circle1() {
  document.getElementById("debugDiv").innerHTML = "circle 1 is selected";
}

window.onload = frameIni();

function frameIni() {
  document.getElementById("planetPicker").style.display = "none";
  var width = screen.width;
  var height = screen.height;
}

function showDebug() {
  document.getElementById("debugDiv").innerHTML = "De width is " + screen.width + "</br>";
  document.getElementById("debugDiv").innerHTML += "De height is " + screen.height;
}

function intro() {
  document.getElementById("welcomeDivMain").style.display = "none";
  setTimeout(loadStep2, 1000);
}

function loadStep2() {
  document.getElementById("step2DivMain").style.display = "block";
}

function input(x) {
  console.log(document.getElementById("inputeStep2").innerHTML.length);
  if (document.getElementById("step2DivMain").className == "step2DivMainClass inputCheck") {
    console.log("code input not allowed");
  } else {
    if (document.getElementById("inputeStep2").innerHTML == "hier komt de code" || document.getElementById("inputeStep2").innerHTML == "fout, probeer opnieuw") {
      document.getElementById("inputeStep2").innerHTML = ""
    }
    var xInput = x.toString();
    document.getElementById("inputeStep2").innerHTML += xInput;
    if (document.getElementById("inputeStep2").innerHTML.length > 6) {
      if (document.getElementById("inputeStep2").innerHTML == "1234567") {
        noInputStep2(0);
        document.getElementById("inputeStep2").style.backgroundColor = "green";
        setTimeout(step2CorrectCode, 200);
      } else {
        noInputStep2(0);
        document.getElementById("inputeStep2").style.backgroundColor = "red";
        setTimeout(step2FoutCode, 1000);
      }
    }
  }
}

function step2FoutCode() {
  document.getElementById("inputeStep2").style.backgroundColor = "black";
  document.getElementById("inputeStep2").innerHTML = "fout, probeer opnieuw";
  noInputStep2(1);
}

function step2CorrectCode() {
  document.getElementById("inputeStep2").style.backgroundColor = "black";
  document.getElementById("inputeStep2").innerHTML = "succes";
  noInputStep2(1);
  setTimeout(step3, 1000);
}

function noInputStep2(x) {
  if (x == 0) {
    document.getElementById("step2DivMain").className = "step2DivMainClass inputCheck";
  } else if (x == 1) {
    document.getElementById("step2DivMain").className = "step2DivMainClass";
  }
}

function step2Backspace() {
  var x = document.getElementById("inputeStep2").innerHTML.slice(0, -1);
  if (document.getElementById("step2DivMain").className == "step2DivMainClass inputCheck") {

  } else if (document.getElementById("inputeStep2").innerHTML == "hier komt de code" || document.getElementById("inputeStep2").innerHTML == "fout, probeer opnieuw") {

  } else if (document.getElementById("inputeStep2").innerHTML.length < 1) {

  } else {
    document.getElementById("inputeStep2").innerHTML = x;
    console.log(x);
    }
}

function step3() {
  document.getElementById("step2DivMain").style.display = "none";
  document.getElementById("step3DivMain").style.display = "block";
}

function clickPlanet() {
  console.log("click");
}

function skipTo3() {
  document.getElementById("step3DivMain").style.display = "block";
  document.getElementById("welcomeDivMain").style.display = "none";
}

function skipTo4() {
  document.getElementById("step4DivMain").style.display = "block";
  document.getElementById("welcomeDivMain").style.display = "none";
}
