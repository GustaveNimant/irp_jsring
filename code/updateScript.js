function updateInnerHTMLOfIdOfValue (id, val) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id',id);
    console.log(callee+'.input.val',val);

    // Improve check that innerHTML does exist
    
    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);
    doc.innerHTML = val;
    
}
function updateValueOfIdOfValue (id, val) {
    let [callee, caller] = functionNameJS();
    console.log('Entering in',callee,'called by',caller);
    console.log(callee+'.input.id',id);
    console.log(callee+'.input.val',val);

    // Improve check that innerHTML does exist
    
    let doc = document.getElementById(id);
    console.log(callee+'.doc:',doc);
    doc.value = val;
    
}

