const express = require('express');

var os = require("os");
var hostname = os.hostname();

let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get("/info", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hostname: ${hostname}`);
});

app.listen("3000", ()=>{
    console.log("Server is listening on port 3000");
})
