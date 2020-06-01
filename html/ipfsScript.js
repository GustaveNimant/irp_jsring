 function fetchGetTextForm(url) {
     console.log('fetchGetTextForm.input.url:',url);

     return fetch(url, { method: "GET", mode: 'cors' })
 }
 
 function fetchGetJson (url) {
     console.log('fetchGetJson.input.url:',url)

     return fetch(url, { method: "GET"} )
	 .then( resp => {console.log('fetchGetJson.resp',resp); return resp.json()} )
 }

 function fetchGetPinned (url) {
     console.log('fetchGetPinned.input.url:',url)

     return fetch(url,{ method: "GET"} )
	 .then( resp => {console.log('fetchGetPinned resp',resp.ok); return resp.ok} )
 }

 function fetchPostMkdirForm(mfspath, url) {
     console.log('fetchPostTextForm.input.msfpath:',mfspath);
     console.log('fetchPostTextForm.input.url:',url);
     
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
     console.log('fetchPostTextForm.input.url:',url);
     console.log('fetchPostTextForm.input.content:'+content);
     
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
     console.log('fetchGetTextCors.input.url:',url);

     return fetch(url, { method: "GET", mode: "cors"} )
	 .then(validate)
	 .then( resp => resp.text() )
 }	 
