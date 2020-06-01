/**
* these function should Not refer to any hardcoded id 
*/

function baseName(mfspath){
     console.log('baseName.input.mfspath:',mfspath);
     
     var base = new String(mfspath).substring(mfspath.lastIndexOf('/') + 1); 
     if(base.lastIndexOf(".") != -1) {       
	 base = base.substring(0, base.lastIndexOf("."));
     }
     console.log('baseName.result:',result);
     return base;
 }

// Button

 function buttonCopyFile (name) {
     console.log('buttonCopyFile.input.name:',name);
     let butCop = '<input type="button" value="Copy ' + name + '" onclick="">';
     return butCop;
 }
 
 function buttonModifyFile (name) {
     console.log('buttonModifyFile.input.name:',name);
     
     let butMod = '<input type="button" value="Modify ' + name + '" onclick="unlockFileEdit ()">';
     return butMod;
 }


 function callback (tag) {
     console.log('callback.input.tag:',tag)
     
     const result = obj => {
	 displayByIdOfTagOfValue(tag, obj); 
     };
     return result
 }
 
 function callbackIpfsIo (tag) {
     console.log('callbackIpfsIo.input.tag:',tag)

     const substi = obj => {
	 let text = "<a href=https://ipfs.io/ipfs/"+obj+">"+obj+"</a>";
	 displayByIdOfTagOfValue(tag, text);
     };
     return substi
 }
 
 function callbackIpfsLocal (tag) {
     console.log('callbackIpfsLocal.input.tag:',tag)

     const substi = obj => {
	 let text = "<a href=http://127.0.0.1:5001/ipfs/"+obj+">"+obj+"</a>";
	 displayByIdOfTagOfValue(tag, text);
     };
     return substi
 }

 function chopOfMfsPath(mfspath){
     console.log('chopOfMfsPath.input.mfspath:',mfspath);
     // MfsPath is decomposed into
     //   [ParentDirectory, BaseName, RootName, Extension]
     // Ex.: "/my/ceci/Z_block.txt" =>
     //     ["/my/ceci", "Z_block.txt", "Z_block", ".txt" ]
     if (mfspath.match('/./')) {
	 [parent,basename] = mfspath.split('/./')
     } else {
	 let p = mfspath.lastIndexOf('/')
	 // console.log('p: '+p)
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
     console.log('chopOfMfsPath.result:',result);
     return result;
 }

 function displayByIdOfTagOfValue (tag, value) {
     console.log('displayByIdOfTagOfValue.input.tag:',tag)
     console.log('displayByIdOfTagOfValue.input.value:',value)
     
     document.getElementById(tag).innerHTML = value
 }

function functionNameJS () {
     let stack = new Error().stack;
     let stackArray = stack.split('\n');
     let callee = stackArray[1].split('@')[0];
     let caller = stackArray[2].split('@')[0];
     return [callee, caller];
 }

function logErrorOfHash (err, hash) { // Improve no reference to id "error"
     console.log("logErrorOfHash.input.err:",err);
     console.log("logErrorOfHash.input.hash:",hash);

     const message = err.message;
     console.log("logError.message:'"+message+"'");
     displayByIdOfTagOfValue("error", message);
     switch (message){
	 case "Internal Server Error":
	     var text = "Internal Server Error because ipfs file path was uncorrect<br>run : ipfs pin add "+hash;
	     displayByIdOfTagOfValue("error", text);
	     
	     break;
	     
	 default:
	     console.log("logError.default.err:'"+err+"'");
     } // switch
 }
 
 function logError (err) {
     console.log("logError.input.err:",err);
     
     const message = err.message;
     console.log("logError : message '"+message+"'");
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
	     console.log('logError', "Cannot read property 'length' of null");
	     displayByIdOfTagOfValue("error", '');
	     var dir = document.getElementById('CurrentMfsDirectoryId').value;
	     console.log('logError dir', dir);
	     updateElementOfIdOfValue('h3-title', dir + ' is empty');
	     break;

	 case "entries is null":
	     console.log('logError', 'entries is null');
	     displayByIdOfTagOfValue("error", '');
	     var dir = document.getElementById('CurrentMfsDirectoryId').value;
	     console.log('logError dir', dir);
	     updateElementOfIdOfValue('h3-title', dir + ' is empty');
	     break;

	 case "Cannot read property 'QmPcmWRAzbsDA25SENuZ7qRCPWYsPsWCgQV4vKPndydryc' of undefined":
	     displayByIdOfTagOfValue("error", '');
	     break;
	     
	 default:
	     console.log("logError : default err '"+err+"'");
     } // switch
 }

 function updateElementOfIdOfValue (id, value) {
     let doc = document.getElementById(id);
     doc.innerHTML = value;
 }

 function valueInputFileOfFormOfNameOfId(forNam, curNam, curId) {
     console.log('valueInputTextOfFormOfNameOfId.input.forNam',forNam);
     console.log('valueInputTextOfFormOfNameOfId.input.curNam',curNam);
     console.log('valueInputTextOfFormOfNameOfId.input.curId',curId);

     let form = getFormOfName(forNam);
     
     let elements = form.elements;
     console.log('valueInputTextOfFormOfNameOfId.elements:',elements);
     
     var result = "";
     for (let e=0; e <elements.length; e++) {
	 let ele = elements[e];
	 if(ele.tagName == "INPUT" && ele.type == "file"){
	     if (ele.id == curId && ele.name == curNam) {
		 result = ele.value
	     }
	 }
     }
     console.log('valueInputTextOfFormOfNameOfId.result:',result);

     if(result == "") {
	 throw "No such Input File element in Form '" + forNam + "' '" + curNam + "' '"+ curId
     }
     return result;
 }

 function valueInputRadioOfFormOfNameOfId(forNam, curNam, curId) {
     console.log('valueInputRadioOfFormOfNameOfId.input.forNam',forNam);
     console.log('valueInputRadioOfFormOfNameOfId.input.curNam',curNam);
     console.log('valueInputRadioOfFormOfNameOfId.input.curId',curId);
     
     let form = getFormOfName(forNam);
     
     let elements = form.elements;
     console.log('valueInputRadioOfFormOfNameOfId.elements:',elements);
     
     var result = "";
     for (let e=0; e <elements.length; e++) {
	 let ele = elements[e];
	 if(ele.tagName == "INPUT" && ele.type == "radio"){
	     if (ele.id == curId && ele.name == curNam) {
		 result = ele.value
	     }
	 }
     }
     console.log('valueInputRadioOfFormOfNameOfId.result:',result);
     
     if(result == "") {
	 throw "No such Input Radio element in Form '" + forNam + "' '" + curNam + "' '"+ curId
     }
     return result;
 }
 
 function valueInputTextOfFormOfNameOfId(forNam, curNam, curId) {
     console.log('valueInputTextOfFormOfNameOfId.input.forNam',forNam);
     console.log('valueInputTextOfFormOfNameOfId.input.curNam',curNam);
     console.log('valueInputTextOfFormOfNameOfId.input.curId',curId);

     let form = getFormOfName(forNam);
     
     let elements = form.elements;
     console.log('valueInputTextOfFormOfNameOfId.elements:',elements);
     
     var result = "";
     for (let e=0; e <elements.length; e++) {
	 let ele = elements[e];
	 if(ele.tagName == "INPUT" && ele.type == "text"){
	     if (ele.id == curId && ele.name == curNam) {
		 result = ele.value
	     }
	 }
     }
     console.log('valueInputTextOfFormOfNameOfId.result:',result);

     if(result == "") {
	 throw "No such Input Text element in Form '" + forNam + "' '" + curNam + "' '"+ curId
     }
     return result;
 }
 
 function valueInputOfNameOfId(curNam, curId) {
     console.log('valueInputOfNameOfId.input.curNam',curNam);
     console.log('valueInputOfNameOfId.input.curId',curId);
     
     let names = document.getElementsByName(curNam);
     console.log('valueInputOfNameOfId.names',names);

     var result = "";
     for (let n=0; n <names.length; n++) {
	 if (names[n].id == curId) {
	     result = names[n].value;
	 }
     }
     console.log('valueInputOfNameOfId.result',result);
     return result
 }

// Json

 function sizeOfJsonOfKey (json, key) {
     let siz = json[key]['Size']
     if (siz > 0) { return ' ('+siz+' octets) '; }
     else {return "";}
 }

 function typeOfJsonOfKey (json, key) {
     console.log ('typeOfJsonOfKey.input.json:', json);
     console.log ('typeOfJsonOfKey.input.key:', key);

     let result = json[key]['Type'];
     console.log ('typeOfJsonOfKey.result:', result);
     return result;
 }

 function typeImageOfJsonOfKey (json, key) {
     console.log('typeImageOfJsonOfKey.input.json',json);
     console.log('typeImageOfJsonOfKey.input.key',key);

     let type = typeOfJsonOfKey (json, key);
     result = imageOfType(type);
     console.log ('typeImageOfJsonOfKey.result:', result);
     return result;
 }

