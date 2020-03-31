const webui = 'http://127.0.0.1:5001';

const api_url = webui + '/api/v0/'

// -----------------------------------

 const promises = [getIp(), getPeerID()];
 console.log('promises '+promises);

getSpot();

async function getSpot() {
    
    await provideOfKeyOfFunction('IP', getIp())
    await provideOfKeyOfFunction('PEERID', getPeerID())

    var ip = await retrieveOfKey('IP')
    var peeId = await retrieveOfKey('PEERID')
    
    console.log('getSpot input ip '+ip)
    console.log('getSpot input peeId '+peeId)
    const tic = getTic();
    var ipInt = dot2Int(ip);
    var spot = (tic ^ +ipInt)>>>0;
    
    var result = "--- # spot for "+peeId+"\n";
    result += "tic: "+tic+"\n";
    result += "ip: "+ipInt+"\n";
    result += "spot: "+spot;
    
    console.log('getSpot result '+result);
    let e = document.getElementById('spot');
    e.innerHTML = result;

} 

 function getTic() {
     var date = new Date();
     var result =parseInt (date.getTime() / 1000);
     console.log('getTic result '+result)
     return result
 }

 function dot2num(dip) {
     console.log('dot2num input dip '+dip);
     let atoms = dip.split('.');
     var nip = 0;
     for (let i = 3; i >= 0; i--) {
	 nip |= (+parseInt(atoms[3 - i]) << (i * 8));
	 console.log('dot2num nip: '+nip)
     }
     return nip>>>0
 }
 
 function dot2Int(dot) {
     console.log('dot2Int input dot '+dot);
     let d = dot.split('.');
     var result = ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
     console.log('dot2Int result '+result)
     return result
 }
 

// -----------------------------------
function fetchJsonCors(url) {
     console.log('fetchJsonCors url '+url)
     return fetch(url, {mode: "cors"} ).then(validate)
				       .then( resp => resp.json() )
 }

function fetchJsonGet(url) {
     console.log('fetchJsonGet url '+url)
     return fetch(url, { method: "GET"} ).then(validate).then( resp => resp.json() )
 }

function getIp() {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)
    
    let url = 'https://iph.heliohost.org/cgi-bin/jsonip.pl'
    var result = fetchJsonCors(url)
	.then( obj => { return Promise.resolve(obj.ip) })
	.catch(logError)
	    console.log('getIp result '+result);
    return result
    console.log( 'Exiting from '+here)
}

function getPeerID() {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)
    let url = api_url + 'config?&arg=Identity.PeerID&encoding=json';
    console.log('getPeerID url '+url);
    var result = fetchJsonGet(url)
	.then( obj => { return Promise.resolve(obj.Value) })
	.catch(logError)
	    console.log('getPeerID result '+result);
    return result
    console.log( 'Exiting from '+here)   
}

function callback(tag) {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)   
    const substi = obj => {
	let e = document.getElementById(tag);
	e.innerHTML = obj;
    };
    return substi
    console.log( 'Exiting from '+here)       
}

function validate(resp) {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)   
    if (resp.status >= 200 && resp.status < 300) {
	return Promise.resolve(resp)
    } else {
	console.log('status:',resp.status)
	return Promise.reject(new Error(resp.statusText))
    }
    console.log( 'Exiting from '+here)     
}

function logError(err) {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)    
    console.log("logError "+err);
    console.log( 'Exiting from '+here)    
}

getIp().then(callback('ip'));
getPeerID().then(callback('peerid'));

async function provideOfKeyOfFunction(key, funPar) {
    const here = arguments.callee.name
    console.log("Entering in "+here+" with '"+key+"'")

    var value = await buildAndStoreOfKeyOfFunction (key, funPar);
	
    console.log('Exiting from '+here+' with result '+value)
  }

provideOfKeyOfFunction('IP', getIp())
provideOfKeyOfFunction('PEERID', getPeerID())

function storeOfKeyOfValue (key, value){
    const here = arguments.callee.name
    console.log("Entering in "+here+" with '"+key+"'")

    if (isStoredOfKey(key)) {
	document.cookie = key + '=' + value;
	console.log('Cookie : '+document.cookie);
    }
    console.log("Exiting from "+here+" with '"+document.cookie+"'")  
}

async function buildAndStoreOfKeyOfFunction (key, funPar){
    const here = arguments.callee.name
    console.log("Entering in "+here+" with '"+key+"'")
    
    var value = await funPar
    console.log(here+" key '"+key+"' value '"+value+"'")
    storeOfKeyOfValue (key, value)

    console.log('Exiting from '+here)
    return value
}

async function isStoredOfKey(key) {
    const here = arguments.callee.name
    console.log('Entering in '+here)

    var result = cookie_exist_of_key(key); // true ou false

    console.log('Exiting from '+here+' result '+result)
    return result;
}

async function retrieveOfKey(key) {
    const here = arguments.callee.name
    console.log('Entering in '+here)

    const value = cookie_retrieve_value_of_key (key); // valeur de la key
    
    console.log('Exiting from '+here+' value '+value)
    return value;
}

function cookie_exist_of_key (key) {
    const here = arguments.callee.name
    console.log("Entering in "+here+" with '"+key+"'")
    if (document.cookie.length > 0){

	var table = document.cookie.split(/;/);
	var valeur="";
	for (i=0; i<table.length; i++){
	    var item = (table[i]).trim();
	    if(item.indexOf(key)!= -1){
		console.log(here+": La clé '"+key+"' existe");
		valeur = item.substring(Number(key.length + item.indexOf( key)), item.length);
		console.log(here+": Sa valeur est '"+valeur+"'");
		return true;
	    }
	}
    }
    console.log(here+': La clé '+key+' n\'existe pas !');
    console.log('Exiting from '+here)
    return false;
}


function cookie_retrieve_value_of_key (key) {
    const here = arguments.callee.name
    console.log("Entering in "+here+" with '"+key+"'")

    var table = document.cookie.split(/;/);
    var valeur="";
    for (i=0; i<table.length; i++){
	var item = (table[i]).trim();
	if(item.indexOf(key) != -1){
	    console.log(here+": item '"+item+"'");
	    console.log(here+": La clé '"+key+"' existe");
	    valeur = item.substring(Number(key.length + item.indexOf( key) +1), item.length);
	    console.log(here+": La valeur de la clef '"+key+"' est '"+valeur+"'");
	    return valeur;
	    }
    }
}
