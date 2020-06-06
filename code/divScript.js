function checkDivOfClassOfId(divCla, divId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.divCla',divCla);
    console.log(callee+'.input.divId',divId);

    if (divCla == "") {
	errorMessage ('div Name were not empty', divCla, "Check", caller)   
    }
    if (divId == "") {
	errorMessage ('Id were not empty', divId, "Check", caller)   
    }
}

function divOfId(divId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.divId:',divId);
    
    var element = document.getElementById(divId)
    console.log(callee+'.element:',element);
    
    if(element.tagName != "DIV") {
	errorMessage ('Div tagname were DIV', element.tagName, "Check", caller)   

    }
    return element;
}

function spanOfSpanIdOfDivId(spaId, divId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.spaId',spaId);
    console.log(callee+'.input.divId',divId);
    
    let div = divOfId(divId);
    console.log(callee+'.div:',div);
    
    let span = div.getElementsByTagName("SPAN");
    console.log(callee+'.span:',span);
    let result = span[0];
    if(span[0].id != spaId){
	throw "Span id is uncorrect"
    }
    console.log(callee+'.result:',result);
    return result;
}

function divOfClassOfId(divCla, divId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.divCla:',divCla);
    console.log(callee+'.input.divId:',divId);
    
    checkDivOfClassOfId(divCla, divId);

    var elements = document.getElementsByClassName(divCla)
    console.log(callee+'.elements:',elements);
    
    var count = 0;
    var element = ""
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "DIV") {
	    if (ele.id == divId && ele.className == divCla) {
		count++;
		element = ele;
	    }
	}
    }
    console.log(callee+'.element:',element);
    console.log(callee+'.count:',count);
    if( count != 1) {
	errorMessage ('couple (class, id) exits as unique', count+' ('+element.class+', '+element.id+')', "Check", caller)   

    }
    return element;
}

function updateOfSpanIdOfDivIdOfText(spaId, divId, text) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.spaId',spaId);
    console.log(callee+'.input.divId',divId);
    console.log(callee+'.input.text',text);
    
    let element = spanOfSpanIdOfDivId(spaId, divId);
    console.log(callee+'.element:',element);
    element.textContent = text;
}

function textOfSpanIdOfDivId(spaId, divId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.spaId',spaId);
    console.log(callee+'.input.divId',divId);
    
    let element = divOfClassOfId(divCla, divId);
    console.log(callee+'.element:',element);
    result = element.textContent

    console.log(callee+'.result:',result);

    if(result == "") {
	throw "No such Span element '" + spaId + "' '" + divId
    }
    return result;
}

