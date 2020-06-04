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

function buttonCopyFile (name) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.name:',name);
    
    let result = '<input type="button" value="Copy ' + name + '" onclick="">';
    console.log(callee+'.result:',result);
    return result;
}

function buttonModifyFile (name) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.name:',name);
    
    let result = '<input type="button" value="Modify ' + name + '" onclick="unlockFileEdit ()">';
    console.log(callee+'.result:',result);
    return result;
}

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

function displayByIdOfTagOfValue (tag, value) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.tag:',tag);
    console.log(callee+'.input.value:',value)
    
    document.getElementById(tag).innerHTML = value
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

function functionNameJS () {
    let stack = new Error().stack;
    let stackArray = stack.split('\n');
    let callee = stackArray[1].split('@')[0];
    let caller = stackArray[2].split('@')[0];
    if (caller == "") {caller = "main"};
    return [callee, caller];
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

function checkOfFormOfNameOfId(forNam, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.forNam',forNam);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);

    if (forNam == "") {
	errorMessage ('form Name were not empty', forNam, "Check", caller)   
    }
    if (inpNam == "") {
	errorMessage ('input Name were not empty', inpNam, "Check", caller)   
    }
    if (curId == "") {
	errorMessage ('Id were not empty', curId, "Check", caller)   
    }
}

function elementInputTextOfFormOfNameOfIdOfValue(forNam, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    
    checkOfFormOfNameOfId(forNam, inpNam, curId);
    
    let form = getFormOfName(forNam);
    let elements = form.elements;
    console.log(callee+'.elements:',elements);
    
    var count = 0;
    var element = ""
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "INPUT" && ele.type == "text"){
	    if (ele.id == curId && ele.name == inpNam) {
		count++;
		element = ele;
	    }
	}
    }

    console.log(callee+'.element:',element);
    console.log(callee+'.count:',count);
    if( count != 1) {
	errorMessage ('couple (name, id) exits as unique', count+' ('+element.name+', '+element.id+')', "Check", caller)   

    }
    return element;
}
function updateInputTextOfFormOfNameOfIdOfValue(forNam, inpNam, curId, value) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.value',value);
    
    checkOfFormOfNameOfId(forNam, inpNam, curId);
    let element = elementInputTextOfFormOfNameOfIdOfValue(forNam, inpNam, curId);
    element.value = value;
}

function valueInputFileOfFormOfNameOfId(forNam, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.forNam',forNam);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);
    
    let form = getFormOfName(forNam);
    
    let elements = form.elements;
    console.log(callee+'.elements:',elements);
    
    var result = "";
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "INPUT" && ele.type == "file"){
	    if (ele.id == curId && ele.name == inpNam) {
		result = ele.value
	    }
	}
    }
    console.log(callee+'.result:',result);

    if(result == "") {
	throw "No such Input File element in Form '" + forNam + "' '" + inpNam + "' '"+ curId
    }
    return result;
}

function valueInputRadioOfFormOfNameOfId(forNam, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.forNam',forNam);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);
    
    let form = getFormOfName(forNam);
    
    let elements = form.elements;
    console.log(callee+'.elements:',elements);
    
    var result = "";
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "INPUT" && ele.type == "radio"){
	    if (ele.id == curId && ele.name == inpNam) {
		result = ele.value
	    }
	}
    }
    console.log(callee+'.result:',result);
    
    if(result == "") {
	throw "No such Input Radio element in Form '" + forNam + "' '" + inpNam + "' '"+ curId
    }
    return result;
}

function valueInputTextOfFormOfNameOfId(forNam, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.forNam',forNam);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);

    let form = getFormOfName(forNam);
    
    let elements = form.elements;
    console.log(callee+'.elements:',elements);
    
    var result = "";
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "INPUT" && ele.type == "text"){
	    if (ele.id == curId && ele.name == inpNam) {
		result = ele.value
	    }
	}
    }
    console.log(callee+'.result:',result);

    if(result == "") {
	throw "No such Input Text element in Form '" + forNam + "' '" + inpNam + "' '"+ curId
    }
    return result;
}

function valueInputOfNameOfId(inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);
    
    let names = document.getElementsByName(inpNam);
    console.log(callee+'.names',names);

    var result = "";
    for (let n=0; n <names.length; n++) {
	if (names[n].id == curId) {
	    result = names[n].value;
	}
    }
    console.log(callee+'.result',result);
    return result
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

