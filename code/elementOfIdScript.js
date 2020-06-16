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

function elementOfIdOfTag (eleId, eleTag ) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.eleId:',eleId);
    
    let element = document.getElementById(eleId);
    console.log(callee+'.element:',element);

    let tagNam = element.tagName;
    console.log(callee+'.tagNam:',tagNam);
    
    if(tagNam != eleTag) {
	errorMessage (eleTag, tagNam, "check Id "+eleId, caller);
    }
    return element;    
}

