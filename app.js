// IVAO XA ATC Timer
// Made with Node.JS
// By BadBoyHaloCat
console.log('Server initiated!')

// ----- PACKAGES -----
let fs = require("fs")
let http = require("http")
let path = require("path")
const { getHeapCodeStatistics } = require("v8")
console.log('Loaded packages.')

// ----- VARIABLES -----
let whazzupurl = 'http://api.ivao.aero/getdata/whazzup/whazzup.txt'
let port = '80'
console.log('Loaded variables.')

// ----- FILE IMPORTS -----
console.log('Loaded files')

// ----- WEB SERVER | SETUP -----
console.log('Loading request handler...')
http.createServer(function (req, res) {
    let url = req.url
    console.log(`${req.method} ${req.url}`);
  
    // extract URL path
    // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
    // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
    // by limiting the path to current directory only
    const sanitizePath = path.normalize(url).replace(/^(\.\.[\/\\])+/, '');
    let pathname = path.join(__dirname, sanitizePath);
  
    fs.exists(pathname, function (exist) {
      if(!exist) {
        // if the file is not found, return 404
        res.statusCode = 404;
        res.end(`File ${pathname} not found!`);
        return;
      }
  
      // if is a directory, then look for index.html
      if (fs.statSync(pathname).isDirectory()) {
        pathname += '/index.html';
      }
  
      // read file from file system
      fs.readFile(pathname, function(err, data){
        if(err){
          res.statusCode = 500;
          res.end(`Error getting the file: ${err}.`);
        } else {
          // based on the URL path, extract the file extention. e.g. .js, .doc, ...
          const ext = path.parse(pathname).ext;
          // if the file is found, set Content-type and send data
          res.setHeader('Content-type', 'text/html' );
          res.end(data);
        }
      });
    });
    let nodedata = 'Node.JS Variables used for transfer\nwhazzupurl = ' + whazzupurl + '\nport = ' + port
    fs.writeFile('node-data.txt', nodedata, function (err) {
        if (err) { console.log('Error writing to node-data.txt.'); throw err; }
    })
    console.log('Data sent to worker.')
  }).listen(parseInt(port));
  console.log('Request handler ready.')
  console.log('ONLINE AT PORT ' + port)
