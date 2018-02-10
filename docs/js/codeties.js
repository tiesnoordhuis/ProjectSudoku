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
