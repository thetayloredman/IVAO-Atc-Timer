// IVAO XA ATC Timer
// Made with Node.JS
// By BadBoyHaloCat

// ----- PACKAGES -----
let fs = require("fs")
let http = require("http")

// ----- VARIABLES -----
let whazzupurl = 'http://api.ivao.aero/getdata/whazzup/whazzup.txt'

// ----- FILE IMPORTS -----

// ----- WEB SERVER | SETUP -----
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Tested!</h1>');
  }).listen(8080);