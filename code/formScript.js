function checkOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.forNam',forNam);
    console.log(callee+'.input.inpTyp',inpTyp);
    console.log(callee+'.input.inpNam',inpNam);
    console.log(callee+'.input.curId',curId);

    let type_a = ["file", "text"];
    if (forNam == "") {
	errorMessage ('form Name were not empty', forNam, "Check", caller)   
    }
    if (! type_a.includes (inpTyp)) {
	errorMessage ('input Type were "text" or "file"', inpTyp, "Check", caller)   
    }
    if (inpNam == "") {
	errorMessage ('input Name were not empty', inpNam, "Check", caller)   
    }
    if (curId == "") {
	errorMessage ('Id were not empty', curId, "Check", caller)   
    }
}

function elementInputOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    
    checkOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId);
    
    let form = getFormOfName(forNam);
    let elements = form.elements;
    console.log(callee+'.elements:',elements);
    
    var count = 0;
    var element = ""
    for (let e=0; e <elements.length; e++) {
	let ele = elements[e];
	if(ele.tagName == "INPUT" && ele.type == inpTyp){
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
function updateInputOfFormOfTypeOfNameOfIdOfValue(forNam, inpTyp, inpNam, curId, value) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.value',value);
    
    let element = elementInputOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId);
    console.log(callee+'.element:',element);
    element.value = value;
}

function valueInputOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);

    let element = elementInputOfFormOfTypeOfNameOfId(forNam, inpTyp, inpNam, curId);
    console.log(callee+'.element:',element);
    result = element.value

    console.log(callee+'.result:',result);

    if(result == "") {
	throw "No such Input element in Form '" + forNam + "' '" + inpTyp + "' '" + inpNam + "' '"+ curId
    }
    return result;
}

 function getFormOfName(nameForm) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.nameForm:',nameForm);

     let forms = document.getElementsByName(nameForm);
     console.log(callee+'.forms:',forms);

     let form = forms[0];
     let name = form.name;
     console.log(callee+'.name:',name);
     console.log(callee+'.form:',form);

     let elements = form.elements;
     console.log(callee+'.elements:',elements);
     for (let e=0; e <elements.length; e++) {
 	 let ele = elements[e];
	 console.log(callee+'.ele:',ele);
	 console.log(callee+'.ele.tag:',ele.tagName);
	 console.log(callee+'.ele.id:',ele.id);
	 console.log(callee+'.ele.type:',ele.type);
	 console.log(callee+'.ele.name:',ele.name);
	 console.log(callee+'.ele.value:',ele.value);
     }

     return form;
 }
