console.log('----- IVAO XA CONTROLLER TRACKER -----');
console.log('Loaded!')
console.log('Checking for latest Whazzup data...')
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
loadFile(whazzup.txt)
console.log('Fetched Whazzup data.')
console.log('Processing Whazzup...')
let unpruned = result.split('!GENERAL')[0]
let generalup = unpruned.split('!GENERAL')[1]
let clientsup = unpruned.split('!CLIENTS')[1]
let airportsup = unpruned.split('!AIRPORTS')[1]
let serversup = unpruned.split('!SERVERS')[1]
console.log('Primary Whazzup processed.')
console.log('Pruning data...')
let general = generalup.split('!CLIENTS')[0]
let clients = clientsup.split('!AIRPORTS')[0]
let airports = airportsup.split('!SERVERS')[0]
let servers = serversup
console.log('Data pruned.')
console.log('[DEBUG] Printing data!')
console.log( { result, unpruned, generalup, clientsup, airportsup, serversup, general, clients, airports, servers } )