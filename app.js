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
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write(':O, We couldn\'t find the requested file. (Code: 404_NOT_FOUND)');
        } else {
            response.write(data);
        }
        response.end();
    });
};
 
http.createServer(handleRequest).listen(80);