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

