function elementDisabledOfIdOfBoolean(id, bool) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id:',id);
    console.log(callee+'.input.bool:',bool);
    
    let doc = document.getElementById(id);
    doc.disabled = bool;
}

function elementOfIdOfTag (eleId, eleTag ) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.eleId:',eleId);
    console.log(callee+'.input.eleTag:',eleTag);
    
    let element = document.getElementById(eleId);
    console.log(callee+'.element:',element);

    let tagNam = element.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    if(tagNam != eleTag) {
	errorMessage (eleTag, tagNam, "check Id "+eleId, caller);
    }
    return element;    
}

function elementOfIdOfTagOfType (eleId, eleTag, eleTyp ) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.eleId:',eleId);
    console.log(callee+'.input.eleTag:',eleTag);
    console.log(callee+'.input.eleTyp:',eleTyp);
    
    let element = document.getElementById(eleId);
    console.log(callee+'.element:',element);

    let tagNam = element.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    if(tagNam != eleTag) {
	errorMessage (eleTag, tagNam, "check Id "+eleId, caller);
    }

    let typNam = element.type;
    console.log(callee+'.typNam:',typNam);
    
    if(typNam != eleTyp) {
	errorMessage (eleTyp, typNam, "check Id "+eleId+" check Tag "+eleTag, caller);
    }
    return element;    
}

function tableOfId (tabId) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.tabId:',tabId);
    
    let table = document.getElementById(tabId);
    console.log(callee+'.table:',table);

    let tagNam = table.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    if(tagNam != "TABLE") {
	throw "Error Id'" + tabId + " should be 'TABLE'"
    }
    return table;    
}

