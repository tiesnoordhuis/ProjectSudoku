/* hosting van website escape room */

const fs = require("fs");
const http = require('http');

const serverIP = "localhost";
const serverPort = 8000;

var website = ([ ]);

websiteFile();

function websiteFile() {
  fs.readFile("../docs/main.html", (err, data) => {
    if (err) {
      return console.error(err);
    }
    else {
      console.log(typeof(data));
      console.log(typeof(data.toString()));
      console.log(data.toString());
      return data;
    }
  });
}

function loadWebsiteFile() {
  for (var i = 0; i < 2; i++) {
    if (i == 0) {
      website = websiteFile();
      console.log("website set");
    }
    else if (i == 1) {
      console.log(typeof(websiteFile()));
      console.log(websiteFile());
    }
  }
}
