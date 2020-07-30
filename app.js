// IVAO XA ATC Timer
// Made with Node.JS
// By BadBoyHaloCat
console.log('Server initiated!')

// ----- PACKAGES -----
let fs = require("fs")
let http = require("http")
console.log('Loaded packages.')

// ----- VARIABLES -----
let whazzupurl = 'http://api.ivao.aero/getdata/whazzup/whazzup.txt'
console.log('Loaded variables.')

// ----- FILE IMPORTS -----
console.log('Loaded files')

// ----- WEB SERVER | SETUP -----
console.log('Loading request handler...')
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write(':O, We couldn\'t find the requested file. (Code: 404_NOT_FOUND)');
            console.log('Error: 404_NOT_FOUND')
        } else {
            response.write(data);
            console.log('HTTP: New connection.')
        }
        response.end();
    });
};
console.log('Request handler ready.')
let nodedata = 'Node.JS Variables used for transfer\nwhazzupurl = ' + whazzupurl
fs.writeFile('node-data.txt', nodedata, function (err) {
    if (err) { console.log('Error writing to node-data.txt.'); throw err; }
})
console.log('Wrote vars to file.')

http.createServer(handleRequest).listen(80);
console.log('ONLINE')