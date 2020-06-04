 function fetchGetTextForm(url) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.url:',url);

     return fetch(url, { method: "GET", mode: 'cors' })
 }
 
 function fetchGetJson (url) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.url:',url);

     return fetch(url, { method: "GET"} )
	 .then( resp => {console.log(callee+'.resp',resp); return resp.json()} )
 }

 function fetchGetPinned (url) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.url:',url);

     return fetch(url,{ method: "GET"} )
	 .then( resp => {console.log(callee+'.resp.ok',resp.ok); return resp.ok} )
 }

 function fetchPostMkdirForm(mfspath, url) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.msfpath:',mfspath);
     console.log(callee+'.input.url:',url);
      
     let form = new FormData();
     form.append('file', mfspath)   
     const result = fetch(url, {
	 method: "POST",
	 mode: 'cors',
	 body: form
     })
     return result;
 }
 
 function fetchPostTextForm(url, content) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.url:',url);
     console.log(callee+'.input.content:'+content);
     
     let form = new FormData();
     form.append('file', content)   
     const result = fetch(url, {
	 method: "POST",
	 mode: 'cors',
	 body: form
     })
     return result;
 }
 
 function fetchGetTextCors(url) {
     let [callee, caller] = functionNameJS();
     console.log('Entering in',callee,'called by',caller);
     console.log(callee+'.input.url:',url);

     return fetch(url, { method: "GET", mode: "cors"} )
	 .then(validate)
	 .then( resp => resp.text() )
 }	 
