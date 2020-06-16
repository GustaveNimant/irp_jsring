function innerHTMLSpanOfId(id) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);

    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);
    let result = doc.innerHTML;
    console.log(callee+'.result:',result);
    return result;
}

function valueInputTextOfId(id) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);

    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);
    let result = doc.value;
    console.log(callee+'.result:',result);
    return result;
}

function valueSwitchOfId(id) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);

    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);
    if(doc == null) {
	console.error(callee+'.No document with id',id);
    }
    let tagNam = doc.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    var result;
    switch (tagNam) {
    case "BUTTON":
	if (doc.type == "submit") {
	    result = doc.value;
	} else {
	    console.error(callee+'.tagNam:',tagNam,'type',doc.type);
	    throw "unknown Type "+doc.type+" for TagName "+tagNam;
	}
	break;
    case "DIV":
	result = doc.innerText;
	break;
    case "INPUT":
	if ((doc.type == "button") || (doc.type == "text")){ 
	    result = doc.value;
	}
	else {
	    console.error(callee+'.tagNam:',tagNam,'type',doc.type);
	    throw "unknown Type "+doc.type+" for TagName "+tagNam;	
	}
	break;
    case "FORM":
    case "SPAN":
    case "TABLE":
	result = doc.innerHTML;
	break;
    case "TEXTAREA":
	result = doc.value;
	break;
    default:
	console.error(callee+'.tagNam:',tagNam);
	throw "No value for TagName "+tagNam;	
    }
    console.log(callee+'.result:',result);
    return result;
}

