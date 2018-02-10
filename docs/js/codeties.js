/*
comments

7-2-2018
geschreven door Ties Noordhuis

*/

function checkCode() {
  var x = document.getElementById("codeInput").value;
  if (x == "18") {
    document.getElementById("titleDiv").innerHTML = "succes!";
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
