const webui = 'http://127.0.0.1:5001';

const api_url = webui + '/api/v0/'


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

async function provideGetIp(funPar) {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here)   
    var val = await funPar
    console.log('IP Value : '+val)
    var ip = 'IP'

    register (ip, val)
    console.log( 'Exiting from '+here)  
  }


async function provideGetPeerID(funPar) {
    const here =  arguments.callee.name
    console.log( 'Entering in '+here) 
    var val = await funPar
    console.log('PEERID Value : '+val)
    var ip = 'PEERID'

    register (ip, val)
    console.log( 'Exiting from '+here)  
}

provideGetIp(getIp())

provideGetPeerID(getPeerID())

function register (key, val){
    const here = arguments.callee.name
    console.log( 'Entering in '+here) 
    document.cookie = key + '=' + val;
    console.log('Cookie : '+document.cookie);
    console.log( 'Exiting from '+here)  
}
