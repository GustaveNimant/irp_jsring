'use strict';

var ModuleName = './tools.js';

function errorHandler (error) {
    if (error.syscall !== 'listen') {
	throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
    case 'EACCES':
	console.error(bind + ' exige des privilèges plus élevés.');
	process.exit(1);
	break;
    case 'EADDRINUSE':
	console.error(bind + ' est déjà utilisé.');
	process.exit(1);
	break;
    default:
	throw error;
    }
};

function errorMessage (expected, found, cure, caller) {
    console.log ('\n\nErreur dans',caller);
    console.log ('On attendait',expected);
    console.log ('On a trouvé',found);
    console.log ('Remède',cure);
    var stack = new Error().stack;
    console.log ('stack',stack);
    throw "exit";
}

function functionNameJS () {
    let stack = new Error().stack;
    let stackArray = stack.split('\n');
    let callee = stackArray[1].split('@')[0];
    let caller = stackArray[2].split('@')[0];
    return [callee, caller];
}

function getLatestElement (elementArray) {
    var here = functionNameJS(ModuleName);
    var result = elementArray[elementArray.length - 1];
    return result;
};

function isValidEmail (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = (re.test(String(email).toLowerCase()));
    //    if (D.debug) {console.log('Sortie  de',here,'result',result);}
    return result;
}

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

