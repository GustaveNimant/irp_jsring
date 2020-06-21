function nameSwitchOfId(id) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);

    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);

    let tagNam = doc.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    var result;
    switch (tagNam) {
    case "BUTTON":
	if (doc.type == "submit") {
	    result = doc.name;
	}
	else {
	    console.error(callee+'.tagNam:',tagNam,'type',doc.type);
	    throw "unknown Type "+doc.type+" for TagName "+tagNam;	
	}
	break;
    case "INPUT":
	if ((doc.type == "button") || (doc.type == "text") || (doc.type == "file")) {
	    result = doc.name;
	}
	else {
	    console.error(callee+'.tagNam:',tagNam,'type',doc.type);
	    throw "unknown Type "+doc.type+" for TagName "+tagNam;	
	}
	break;
    case "FORM":
	result = doc.name;
	break;
    case "TABLE":
	result = doc.attributes['name'].value;
	break;
    default:
	console.error(callee+'.tagNam:',tagNam);
	throw "No name for TagName "+tagNam;	
    }
    console.log(callee+'.result:',result);
    return result;
}

