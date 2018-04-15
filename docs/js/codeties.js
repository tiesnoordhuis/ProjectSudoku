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
    setTimeout(newScreen, 500);
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
    if (document.getElementById("inputeStep2").innerHTML == "Code hier invullen" || document.getElementById("inputeStep2").innerHTML == "fout, probeer opnieuw") {
      document.getElementById("inputeStep2").innerHTML = ""
    }
    var xInput = x.toString();
    document.getElementById("inputeStep2").innerHTML += xInput;
    if (document.getElementById("inputeStep2").innerHTML.length > 3) {
      if (document.getElementById("inputeStep2").innerHTML == "4823") {
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

function input2(x) {
  console.log(document.getElementById("inputeStep4").innerHTML.length);
  if (document.getElementById("step4DivMain").className == "step2DivMainClass inputCheck") {
    console.log("code input not allowed");
  } else {
    if (document.getElementById("inputeStep4").innerHTML == "Coördinaten" || document.getElementById("inputeStep4").innerHTML == "fout, probeer opnieuw") {
      document.getElementById("inputeStep4").innerHTML = ""
    }
    var xInput = x.toString();
    document.getElementById("inputeStep4").innerHTML += xInput;
    if (document.getElementById("inputeStep4").innerHTML.length > 3) {
      if (document.getElementById("inputeStep4").innerHTML == "2108") {
        noInputStep4(0);
        document.getElementById("inputeStep4").style.backgroundColor = "green";
        setTimeout(step4CorrectCode, 200);
      } else {
        noInputStep4(0);
        document.getElementById("inputeStep4").style.backgroundColor = "red";
        setTimeout(step4FoutCode, 1000);
      }
    }
  }
}

function step4FoutCode() {
  document.getElementById("inputeStep4").style.backgroundColor = "black";
  document.getElementById("inputeStep4").innerHTML = "fout, probeer opnieuw";
  noInputStep4(1);
}

function step4CorrectCode() {
  document.getElementById("inputeStep4").style.backgroundColor = "black";
  document.getElementById("inputeStep4").innerHTML = "succes";
  noInputStep4(1);
  setTimeout(step5, 1000);
}

function noInputStep4(x) {
  if (x == 0) {
    document.getElementById("step4DivMain").className = "step2DivMainClass inputCheck";
  } else if (x == 1) {
    document.getElementById("step4DivMain").className = "step2DivMainClass";
  }
}

function step4Backspace() {
  var x = document.getElementById("inputeStep4").innerHTML.slice(0, -1);
  if (document.getElementById("step4DivMain").className == "step2DivMainClass inputCheck") {

  } else if (document.getElementById("inputeStep4").innerHTML == "Coördinaten" || document.getElementById("inputeStep4").innerHTML == "fout, probeer opnieuw") {

  } else if (document.getElementById("inputeStep4").innerHTML.length < 1) {

  } else {
    document.getElementById("inputeStep4").innerHTML = x;
    console.log(x);
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

  } else if (document.getElementById("inputeStep2").innerHTML == "Code hier invullen" || document.getElementById("inputeStep2").innerHTML == "fout, probeer opnieuw") {

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

function step5() {
  document.getElementById("step4DivMain").style.display = "none";
  document.getElementById("step5DivMain").style.display = "block";
  locationEnteredSucces();
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

function skipTo5() {
  document.getElementById("step5DivMain").style.display = "block";
  document.getElementById("welcomeDivMain").style.display = "none";
}

function skipTo6() {
  document.getElementById("step6DivMain").style.display = "block";
  document.getElementById("welcomeDivMain").style.display = "none";
}

function displayGif() {
  document.getElementById("step5DivMain").classList.add("hidden");
  document.getElementById("step5DivMain").style.display = "none";
  document.getElementById("step6DivMain").classList.remove("hidden");
  document.getElementById("step6DivMain").classList.add("spaceTravel");
  setTimeout(step7, 7000);
}

function step7() {
  document.getElementById("step6DivMain").classList.add("hidden");
  document.getElementById("step7DivMain").classList.remove("hidden");
}
