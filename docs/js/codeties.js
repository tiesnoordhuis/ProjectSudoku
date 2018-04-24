/*
comments

7-2-2018
geschreven door Ties Noordhuis

*/

window.onload = frameIni();

function frameIni() {
  var width = screen.width;
  var height = screen.height;
  console.log("window loaded with width: " + width + " and height: " + height);
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
    if (document.getElementById("inputeStep2").innerHTML == "Code hier invullen" || document.getElementById("inputeStep2").innerHTML == "probeer opnieuw") {
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
  showHint();
  hintGiven = true;
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
  document.getElementById("inputeStep2").innerHTML = "probeer opnieuw";
  noInputStep2(1);
  showHint();
  hintGiven = true;
}

function timerShowHint() {
  if (document.getElementById("step3DivMain").classList.contains("hidden") === false) {
    showHint();
    hintGiven = true;
  }
}

var hintGiven = false;

function showHint() {
  if (hintGiven) {
    return;
  }
  document.getElementById("hintDiv").classList.remove("hidden");
  document.getElementById("hintText").classList.add("hidden");
  document.getElementById("hintButton").classList.remove("hidden");
  document.getElementById("hintButtonSecond").classList.add("hidden");
  if (document.getElementById("step2DivMain").classList.contains("hidden") === false) {
    document.getElementById("mainBody").classList.remove("bodyBackground2");
    document.getElementById("mainBody").classList.add("bodyBackground2Hint");
    document.getElementById("hintButton").innerHTML = "Hint";
    document.getElementById("hintButton").onclick = function() {hint1()};
  } else if (document.getElementById("step3DivMain").classList.contains("hidden") === false) {
    document.getElementById("mainBody").classList.remove("bodyBackground3");
    document.getElementById("mainBody").classList.add("bodyBackground3Hint");
    document.getElementById("hintButton").innerHTML = "Hint";
    document.getElementById("hintButton").onclick = function() {hint2()};
  } else if (document.getElementById("step4DivMain").classList.contains("hidden") === false) {
    document.getElementById("mainBody").classList.remove("bodyBackground2");
    document.getElementById("mainBody").classList.add("bodyBackground2Hint");
    document.getElementById("hintButton").innerHTML = "Hint";
    document.getElementById("hintButton").onclick = function() {hint3()};
  } else if (document.getElementById("step7DivMain").classList.contains("hidden") === false) {
    document.getElementById("mainBody").classList.remove("bodyBackground2");
    document.getElementById("mainBody").classList.add("bodyBackground2Hint");
    document.getElementById("hintButton").innerHTML = "Hint";
    document.getElementById("hintButton").onclick = function() {hint4()};
  }
}

function hint1() {
  document.getElementById("hintButton").classList.add("hidden");
  document.getElementById("hintText").classList.remove("hidden");
  document.getElementById("mainBody").classList.remove("bodyBackground2Hint");
  document.getElementById("mainBody").classList.add("bodyBackground2HintGiven");
  document.getElementById("hintText").innerHTML = "Boeken bevatten meer kennis dan je denk";
  console.log("hint1");
}

function hint2() {
  document.getElementById("hintButton").classList.add("hidden");
  document.getElementById("hintText").classList.remove("hidden");
  document.getElementById("mainBody").classList.remove("bodyBackground3Hint");
  document.getElementById("mainBody").classList.add("bodyBackground3HintGiven");
  document.getElementById("hintText").classList.add("hintText2");
  document.getElementById("hintText").classList.remove("hintText");
  document.getElementById("hintButtonSecond").classList.remove("hidden");
  document.getElementById("hintText").innerHTML = "De energiebol zit veilig achter slot en grendel";
  console.log("hint2");
}

function hint2Part2() {
  document.getElementById("hintText").innerHTML = "De sterren hebben veel kleuren";
  document.getElementById("hintButtonSecond").classList.add("hidden");
}

function hint3() {
  document.getElementById("hintButton").classList.add("hidden");
  document.getElementById("hintText").classList.remove("hidden");
  document.getElementById("hintText").classList.remove("hintText");
  document.getElementById("hintText").classList.add("hintText3");
  document.getElementById("mainBody").classList.remove("bodyBackground2Hint");
  document.getElementById("mainBody").classList.add("bodyBackground2HintGiven");
  document.getElementById("hintText").innerHTML = "De poster staat vol met leuke feitjes over de bestemmingen";
  console.log("hint3");
}

function hint4() {
  document.getElementById("hintButton").classList.add("hidden");
  document.getElementById("hintText").classList.remove("hidden");
  document.getElementById("hintText").classList.add("hintText");
  document.getElementById("hintText").classList.remove("hintText2");
  document.getElementById("hintText").classList.remove("hintText3");
  document.getElementById("mainBody").classList.remove("bodyBackground2Hint");
  document.getElementById("mainBody").classList.add("bodyBackground2HintGiven");
  document.getElementById("hintText").innerHTML = "Bouw een escape route voor de sleutel";
  console.log("hint4");
}

function hideHint() {
  document.getElementById("hintDiv").classList.add("hidden");
  hintGiven = false;
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

  } else if (document.getElementById("inputeStep2").innerHTML == "Code hier invullen" || document.getElementById("inputeStep2").innerHTML == "probeer opnieuw") {

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
  document.getElementById("mainBody").classList.remove("bodyBackground2Hint");
  document.getElementById("mainBody").classList.remove("bodyBackground2HintGiven");
  document.getElementById("mainBody").classList.add("bodyBackground3");
  hideHint();
  setTimeout(timerShowHint, 7000);
  console.log("step3");
}

function arduinoConnectSucces() {
  document.getElementById("step3DivMain").classList.add("hidden");
  document.getElementById("step3DivMain").classList.remove("activeStep");
  document.getElementById("step4DivMain").classList.remove("hidden");
  document.getElementById("mainBody").classList.remove("bodyBackground3");
  document.getElementById("mainBody").classList.remove("bodyBackground3Hint");
  document.getElementById("mainBody").classList.remove("bodyBackground3HintGiven");
  document.getElementById("mainBody").classList.add("bodyBackground2");
  setAtArduinoStepFalse();
  hideHint();
  console.log("arduinoConnectSucces");
}

function step5() {
  document.getElementById("step4DivMain").classList.add("hidden");
  document.getElementById("step5DivMain").classList.remove("hidden");
  document.getElementById("mainBody").classList.add("bodyBackground2");
  document.getElementById("mainBody").classList.remove("bodyBackground2Hint");
  document.getElementById("mainBody").classList.remove("bodyBackground2HintGiven");
  hideHint();
  locationEnteredSucces();
}

function locationEnteredSucces() {
  setTimeout(displayGif, 3000);
}

var boxOpen = false;
function openBoxArduino() {
  console.log("button pressed to open box");
  if (boxOpen === false) {
    arduinoRotateSet();
    setTimeout(arduinoServoOff, 12000);
    boxOpen = true;
    document.getElementById("boxButton").classList.add("openBoxButtonClassClicked");
    document.getElementById("boxButtonText").classList.add("openBoxButtonClassClicked");
    console.log("opening box");
  }
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
  setTimeout(step7ShowHint, 5000);
}

function step7ShowHint() {
  document.getElementById("mainBody").classList.remove("bodyBackground2");
  document.getElementById("mainBody").classList.add("bodyBackground2Hint");
  showHint();
  hintGiven = true;
}

function startTimer() {
  for (var i = 0; i < 900; i++) {
    n = ((i + 1) * 1000);
    setTimeout(secondPassed, n);
  }
}

var seconds = 0;

function secondPassed() {
  seconds++;
  if (seconds > 59) {
    minutePassed()
    seconds = 0;
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

function stopTime() {
  var timeMin = document.getElementById("timeTime").innerHTML;
  timeMin = Number(timeMin);
  timeMin = 15 - timeMin;
  var timeSec = seconds
  console.log("time used: " + timeMin + "." + timeSec);
  document.getElementById("timeTime").classList.add("hidden");
  document.getElementById("timeEnd").classList.remove("hidden");
  document.getElementById("timeEnd").innerHTML = timeMin + "." + timeSec;
  document.getElementById("timeText").innerHTML = "Eind tijd: ";
}

function restart() {
  servoReset();
  setTimeout(reloadPage, 10000);
}

function reloadPage() {
  location.reload();
}
