function updateInnerHTMLOfIdOfValue (id, val) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id',id);
    console.log(callee+'.input.val',val);

    let doc = document.getElementById(id);
    if (doc == null) {
	throw "Error in "+callee+" unkown id "+id
    }
    console.log(callee+'.doc:',doc);
    doc.innerHTML = val;
    
}

function updateValueOfIdOfValue (id, val) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id',id);
    console.log(callee+'.input.val',val);

    let doc = document.getElementById(id);
    if (doc == null) {
	throw "Error in "+callee+" unkown id "+id
    }

    let previous = document.getElementById(id).value;
    console.log(callee+'.id',id,'previous value',previous,'updated to',val);
    
    console.log(callee+'.doc:',doc);
    doc.value = val;
    
}

