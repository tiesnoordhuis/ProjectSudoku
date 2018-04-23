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
  var width = screen.width;
  var height = screen.height;
  console.log("window loaded with width: " + width + " and height: " + height);
}

function showDebug() {
  document.getElementById("debugDiv").innerHTML = "De width is " + screen.width + "</br>";
  document.getElementById("debugDiv").innerHTML += "De height is " + screen.height;
}

function step1() {
  document.getElementById("step1DivMain").classList.add("hidden");
  setTimeout(loadStep2, 100);
}

function loadStep2() {
  document.getElementById("step2DivMain").classList.remove("hidden");
  document.getElementById("mainBody").classList.remove("bodyBackground1");
  document.getElementById("mainBody").classList.add("bodyBackground2");
  document.getElementById("timeDisplay").classList.remove("visHidden");
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
      if (document.getElementById("inputeStep2").innerHTML == "4827") {
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
  if (document.getElementById("inputeStep4").classList.contains("inputAllowed")) {
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
  } else if (document.getElementById("inputeStep4").classList.contains("allowResumeInput")) {
    if (document.getElementById("inputeStep4").classList.contains("inputResumed")) {
      console.log("input already resumed");
    } else {
      resumeInput();
      document.getElementById("inputeStep4").classList.add("inputResumed");
      console.log("input resumed");
    }
  }
}

var n = 0;

function step4FoutCode() {
  document.getElementById("inputeStep4").innerHTML = "";
  document.getElementById("inputeStep4").style.backgroundColor = "transparent"
  document.getElementById("step4PreInput").classList.add("visHidden");
  document.getElementById("inputeStep4").classList.add("visHidden");
  document.getElementById("displacedBackspace").classList.add("visHidden");
  document.getElementById("step4WrongInputMsg").classList.remove("visHidden");
  document.getElementById("step4WrongInputMsg").innerHTML = step4ErrorMsg(n);
  n++;
  if (document.getElementById("inputeStep4").classList.contains("newInputSkip")) {
    document.getElementById("inputeStep4").classList.remove("newInputSkip");
  }
  setTimeout(allowResumeInput, 200);
  setTimeout(resumeInput, 4000);
  setTimeout(stopAllowResumeInput, 4001);
}

function allowResumeInput() {
  document.getElementById("inputeStep4").classList.add("allowResumeInput");
}

function stopAllowResumeInput() {
  document.getElementById("inputeStep4").classList.remove("allowResumeInput");
  document.getElementById("inputeStep4").classList.remove("inputResumed");
}

function step4ErrorMsg(n) {
  var errorMsgArray = [];
  errorMsgArray[0] = "Niet genoeg space benzine, kies iets anders";
  errorMsgArray[1] = "Planeet is ontploft, kies een andere bestemming";
  errorMsgArray[2] = "Er zit een Zwart gat in de weg, ga eerst naar andere planeet";
  errorMsgArray[3] = "Daar gaan we altijd al heen, kies liever iets anders";
  errorMsgArray[4] = "Sorry, die bestemming is verboden door big brother";
  errorMsgArray[5] = "Die planeet ken ik niet";
  errorMsgArray[6] = "Upgrade naar premium space travel om daar heen te gaan";
  if (n > 6) {
    return "fout!";
  }
  return errorMsgArray[n];
}

function resumeInput() {
  if (document.getElementById("inputeStep4").classList.contains("inputResumed")) {

  } else {
    noInputStep4(1);
    document.getElementById("inputeStep4").innerHTML = "";
    document.getElementById("step4PreInput").classList.remove("visHidden");
    document.getElementById("inputeStep4").classList.remove("visHidden");
    document.getElementById("displacedBackspace").classList.remove("visHidden");
    document.getElementById("step4WrongInputMsg").classList.add("visHidden");
    document.getElementById("step4WrongInputMsg").innerHTML = "";
  }
}

function step4CorrectCode() {
  document.getElementById("inputeStep4").style.backgroundColor = "transparent";
  document.getElementById("inputeStep4").innerHTML = "succes";
  setTimeout(step5, 1000);
}

function noInputStep4(x) {
  console.log("input check set: " + x);
  if (x == 1) {
    document.getElementById("inputeStep4").classList.add("inputAllowed");
  } else if (x == 0) {
    document.getElementById("inputeStep4").classList.remove("inputAllowed");
  }
}

function step4Backspace() {
  if (document.getElementById("inputeStep4").classList.contains("inputAllowed")) {
    var x = document.getElementById("inputeStep4").innerHTML.slice(0, -1);
    if (document.getElementById("inputeStep4").innerHTML.length < 1) {

    } else {
    document.getElementById("inputeStep4").innerHTML = x;
    console.log(x);
    }
  } else if (document.getElementById("inputeStep4").classList.contains("allowResumeInput")) {
    if (document.getElementById("inputeStep4").classList.contains("inputResumed")) {
      console.log("input already resumed");
    } else {
      resumeInput();
      document.getElementById("inputeStep4").classList.add("inputResumed");
      console.log("input resumed");
    }
  }
}

function step2FoutCode() {
  document.getElementById("inputeStep2").style.backgroundColor = "transparent";
  document.getElementById("inputeStep2").innerHTML = "fout, probeer opnieuw";
  noInputStep2(1);
}

function step2CorrectCode() {
  document.getElementById("inputeStep2").style.backgroundColor = "transparent";
  document.getElementById("inputeStep2").innerHTML = "succes";
  noInputStep2(1);
  setTimeout(step3, 300);
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
  document.getElementById("step2DivMain").classList.add("hidden");
  document.getElementById("step3DivMain").classList.remove("hidden");
  document.getElementById("step3DivMain").classList.add("activeStep");
  document.getElementById("mainBody").classList.remove("bodyBackground2");
  document.getElementById("mainBody").classList.add("bodyBackground3");
}

function arduinoConnectSucces() {
  document.getElementById("step3DivMain").classList.add("hidden");
  document.getElementById("step4DivMain").classList.remove("hidden");
  document.getElementById("mainBody").classList.remove("bodyBackground3");
  document.getElementById("mainBody").classList.add("bodyBackground2");
}

function step5() {
  document.getElementById("step4DivMain").classList.add("hidden");
  document.getElementById("step5DivMain").classList.remove("hidden");
  locationEnteredSucces();
}

function locationEnteredSucces() {
  setTimeout(displayGif, 3000);
}

function openBoxArduino() {
  console.log("button druk voor arduino om doosje te openen");
  arduinoRotateSet();
  setTimeout(arduinoServoOff, 12000);
}

function clickPlanet() {
  console.log("click");
}

function displayGif() {
  document.getElementById("step5DivMain").classList.add("hidden");
  document.getElementById("timeDisplay").classList.add("hidden");
  document.getElementById("step6DivMain").classList.remove("hidden");
  document.getElementById("step6DivMain").classList.add("spaceTravel");
  setTimeout(step7, 7000);
}

function step7() {
  document.getElementById("step6DivMain").classList.add("hidden");
  document.getElementById("timeDisplay").classList.remove("hidden");
  document.getElementById("step7DivMain").classList.remove("hidden");
}

function startTimer() {
  for (var i = 0; i < 15; i++) {
    n = ((i + 1) * 1000);
    setTimeout(minutePassed, n)
  }
}

function minutePassed() {
  var timeStr = document.getElementById("timeTime").innerHTML;
  var timeNum = Number(timeStr);
  timeNum --;
  document.getElementById("timeTime").innerHTML = timeNum;
  if (timeNum === 0) {
    console.log("TIME UP!");
  }
}
