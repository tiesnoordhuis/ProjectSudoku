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
    setTimeout(newScreen, 30000);
  } else {
    document.getElementById("titleDiv").innerHTML = "FOUT!";
    document.getElementById("codeInput").value = "";
    document.getElementById("body").style.backgroundImage = "url('images/boordcomputer3.jpg')";
  }
}

function newScreen() {
  document.getElementById("body").style.backgroundImage = "";
}

function hide(n) {
  if (n = 1) {
    document.getElementById("codeInput").style.display = "none";
    document.getElementById("codeInputButton").style.display = "none";
  }
}

window.onload = frameIni();

function frameIni() {
  var width = screen.width;
  var height = screen.height;
}

function showDebug() {
  document.getElementById("debugDiv").innerHTML = "De width is " + screen.width;
  document.getElementById("debugDiv").innerHTML += "De height is " + screen.height;
}
