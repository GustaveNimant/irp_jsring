/**
 * these function should Not refer to any hardcoded id 
 */
function baseName(mfspath){
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.mfspath:',mfspath);
    
    var base = new String(mfspath).substring(mfspath.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1) {       
	base = base.substring(0, base.lastIndexOf("."));
    }
    console.log(callee+'.result:',result);
    return base;
}

// Button

function callback (tag) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.tag:',tag);
    
    const result = obj => {
	displayByIdOfTagOfValue(tag, obj); 
    };
    
    console.log(callee+'.result:',result);
    return result
}

function callbackIpfsIo (tag) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.tag:',tag);

    const substi = obj => {
	let text = "<a href=https://ipfs.io/ipfs/"+obj+">"+obj+"</a>";
	displayByIdOfTagOfValue(tag, text);
    };
    return substi
}

function callbackIpfsLocal (tag) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.tag:',tag);

    const substi = obj => {
	let text = "<a href=http://127.0.0.1:5001/ipfs/"+obj+">"+obj+"</a>";
	displayByIdOfTagOfValue(tag, text);
    };
    return substi
}

 function callbackTuple (tag1, tag2) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.tag1:',tag1)
     console.log(callee+'.input.tag2:',tag2)
     
     const substi = ([obj1, obj2]) => {
	 let url = linkIpfsHash (obj1);
	 updateElementOfIdOfValue(tag1, url);
	 updateElementOfIdOfValue(tag2, obj2);
     };
     return substi
 }

function chopOfMfsPath(mfspath){
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.mfspath:',mfspath);
    // MfsPath is decomposed into
    //   [ParentDirectory, BaseName, RootName, Extension]
    // Ex.: "/my/ceci/Z_block.txt" =>
    //     ["/my/ceci", "Z_block.txt", "Z_block", ".txt" ]
    if (mfspath.match('/./')) {
	[parent,basename] = mfspath.split('/./')
    } else {
	let p = mfspath.lastIndexOf('/')
	if (p != 0) {
	    parent = mfspath.substr(0,p)
	    basename = mfspath.substr(p+1)
	} else {
	    parent = '/';
	    basename = mfspath.substr(1)
	}
    }
    let d = basename.lastIndexOf('.')
    if (d != -1) {
	rootName = basename.substr(0,d)
	ext = basename.substr(d)
    } else {
	rootName = basename
	ext = ''
    }
    let result = [parent, baseName, rootName, ext]; 
    console.log(callee+'.result:',result);
    return result;
}

function displayByIdOfTagOfValue (id, value) { // Improve 
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);
    console.log(callee+'.input.value:',value)
    
    document.getElementById(id).innerHTML = value
}

function functionNameJS () {
    let stack = new Error().stack;
//    console.log('functionNameJS.stack:',stack);

    var callee;
    var caller;
    var stackArray= [];
    
    if (stack.match("at ")) {
	stackArray = stack.split('at ');
	callee = stackArray[2].split(' ')[0];
	if (stackArray[3] == undefined) {
	    caller = "main";
	}
	else{
	    caller = stackArray[3].split(' ')[0];
	}
	if(caller.match("http:")){caller = "main"};
    }
    else {
	stackArray = stack.split('\n');
	callee = stackArray[1].split('@')[0];
	caller = stackArray[2].split('@')[0];
	if (caller == "") {caller = "main"};
    }
//    console.log('functionNameJS.stackArray:',stackArray);
    return [callee, caller];
}

function errorMessage (expected, found, cure, caller) {
    console.error ('\n\nError in',caller);
    console.error ('Expecting',expected);
    console.error ('Found',found);
    console.error ('Cure',cure);
    var stack = new Error().stack;
    console.error ('stack',stack);
    throw "exit";
}

function logErrorOfHash (err, hash) { // Improve no reference to id "error"
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.err:',err);
    console.log(callee+'input.hash:',hash);
    
    const message = err.message;
    console.log(callee+'.message:',message);
    displayByIdOfTagOfValue("error", message); // Improve
    
    switch (message){
    case "Internal Server Error":
	var text = "Internal Server Error because ipfs file path was uncorrect<br>run : ipfs pin add "+hash;
	displayByIdOfTagOfValue("error", text);
	
	break;
	
    default:
	console.log(callee+'.default.err:',œerr);
    } // switch
}

function logError (err) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.err:',err);
    
    const message = err.message;
    console.log(callee+'message',message);
    displayByIdOfTagOfValue("error", message);
    switch (message){
	
    case "NetworkError when attempting to fetch resource.":
	var text = "NetworkError because ipfs has not been launched<br>run : jsm; . config.sh; ipmsd.sh";
	displayByIdOfTagOfValue("error", text); 
	break;
	
    case "Failed to fetch":
	var text = "NetworkError because ipfs has not been launched<br>run :cd minichain ; . config.sh";
	displayByIdOfTagOfValue("error", text); 
	break;	     
	
    case "Internal Server Error":
	//			 var text = "Internal Server Error because ipfs file path was uncorrect";
	//			 displayByIdOfTagOfValue("error", text); 
	return false;
	break;
	
    case "Cannot read property 'length' of null":
	console.log(callee+'.Cannot read property length of null');
	displayByIdOfTagOfValue("error", '');
	var dir = document.getElementById('CurrentMfsDirectoryId').value;
	console.log(callee+'.dir', dir);
	updateElementOfIdOfValue('h3-title', dir + ' is empty');
	break;
	
    case "entries is null":
        console.log(callee+':entries is null');
	displayByIdOfTagOfValue("error", '');
	var dir = document.getElementById('CurrentMfsDirectoryId').value;
	console.log(callee+'.dir', dir);
	updateElementOfIdOfValue('h3-title', dir + ' is empty');
	break;

    case "Cannot read property 'QmPcmWRAzbsDA25SENuZ7qRCPWYsPsWCgQV4vKPndydryc' of undefined":
	displayByIdOfTagOfValue("error", '');
	break;
	
    default:
	console.log(callee+'"default err:',);
    } // switch
}

function updateElementOfIdOfValue (id, value) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id',id);
    console.log(callee+'.input.value',value);

    let doc = document.getElementById(id);
    doc.innerHTML = value;
}

 function validate (resp) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.resp:',resp);
     
     if (resp.status >= 200 && resp.status < 300) {
	 return Promise.resolve(resp)
     } else {
	 console.log(callee+'.resp.status:',resp.status)
	 return Promise.reject(new Error(resp.statusText))
     }
 }

// Json

function sizeOfJsonOfKey (json, key) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    let siz = json[key]['Size']
    if (siz > 0) { return ' ('+siz+' octets) '; }
    else {return "";}
}

function typeOfJsonOfKey (json, key) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.json:', json);
    console.log(callee+'.input.key:', key);

    let result = json[key]['Type'];
    console.log(callee+'.result:', result);
    return result;
}

function typeImageOfJsonOfKey (json, key) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.json',json);
    console.log(callee+'.input.key',key);

    let type = typeOfJsonOfKey (json, key);
    result = imageOfType(type);
    console.log (callee+'.result:', result);
    return result;
}

