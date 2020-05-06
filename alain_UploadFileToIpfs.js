	 function writeFile(form) {
	     console.log('writeFile : form.elements ',form.elements);
	     let fakepath = form.elements[0].value
	     console.log('writeFile : fakepath ',fakepath)
	     let mfspath = document.getElementById('path').value;
	     console.log('writeFile : mfspath ',mfspath)
	     let file = form.elements[0].files[0]
	     console.log('writeFile : element[0].files ',form.elements[0].files)
	     
	     if (document.getElementById('other_name').checked) {
		 var name = document.getElementById('fil_name').value;
		 console.log('name of file',name);
	     } else {
		 var name = form.elements[0]['files'][0].name;
		 console.log('name of file',name);
	     }
	     	 console.log('name of file X',name);
	     mfspath += '/';
	     mfspath += name;
	     console.log('mfspath',mfspath);
	     
	     let reader = new FileReader();
	     reader.onload = event => {
		 const content_on_load = event.target.result;
		 console.log('writeFile : content_on_load ',content_on_load)
		 writeOfFileOfContent(mfspath, content_on_load).then(callback('hash'))
	     }

	     reader.readAsText(file,'UTF-8') 
	     
	     let formData = new FormData();
	     formData.append("file", file);
	     console.log('writeFile : formData ',formData)
	 }
	 
	 function writeOfFileOfContent(filPat, content) {
	     console.log('writeOfFileOfContent input filPat '+filPat);
	     console.log('writeOfFileOfContent input content '+content)
	     
	     const api_url = 'http://127.0.0.1:5001/api/v0/'
	     var url = api_url + 'files/write?arg=' + filPat + '&create=1';
	     console.log('writeOfFileOfContent : url '+url);
	     return fetchPostTextForm(url, content)
		 .then( _ => hashOfMFSFilePath(filPat) ) 
		 .catch(logError)
	 }
	 
	 function fetchPostTextForm(url, content) {
	     console.log('fetchPostTextForm input url '+url);
	     console.log('fetchPostTextForm input content '+content);
	     
	     let form = new FormData();
	     form.append('file', content)   
	     const result = fetch(url, {
		 method: "POST",
		 mode: 'cors',
		 body: form
	     })
	     return result;
	 }
	 
	 function hashOfMFSFilePath(filPat) {
	     const api_url = 'http://127.0.0.1:5001/api/v0/'
	     console.log('hashOfMFSFilePath : input filPat '+filPat);
	     var url = api_url + 'files/stat?arg='+filPat+'&hash=true'
	     console.log('hashOfMFSFilePath : url '+url);
	     return fetchGetTextForm(url)
		 .then( obj => obj.json())
		 .then( json => {
		     console.log('hashOfMFSFilePath : json ',json);
		     console.log("hashOfMFSFilePath : json.Type '"+json.Type+"'");
		     if (json.Type == "error") {
			 const message = 'Error from hashOfMFSFilePath : '+json.Message;
			 console.log("hashOfMFSFilePath : message '"+message+"'")
			 document.getElementById("error").innerHTML = message;
			 return process.abort();
		     }
		     return json.Hash} )
	 }
	 
	 function fetchGetTextForm(url) {
	     console.log('fetchGetTextForm : input url '+url);
	     return fetch(url, { method: "GET", mode: 'cors' })
	 }
	 
	 function validate(resp) {
	     if (resp.status >= 200 && resp.status < 300) {
		 return Promise.resolve(resp)
	     }
	     return Promise.reject(new Error(resp.statusText))
	 }
	 
	 function logError(err) {
	     console.log("logError : input err ",err);
	     const message = err.message;
	     console.log("logError : message '"+message+"'");
	     document.getElementById("error").innerHTML = message;
	     switch (message){
		 case "NetworkError when attempting to fetch resource.":
		     document.getElementById("error").innerHTML = "NetworkError because ipfs has not been launched\nrun : jsm; . config.sh; ipmsd.sh";
		     return process.abort();
		     break;
		 case "Internal Server Error":
		    document.getElementById("error").innerHTML = "Internal Server Error because ipfs file path was uncorrect";
		     return process.abort();
		     break;
		 default:
		     console.log("logError : output err '"+err+"'");
	     } // switch
	 }
	 
	 function callback(tag) {
	     console.log('callback tag: '+tag)
	     const result = obj => {
		 let e = document.getElementById(tag);
		 console.log('obj:',obj)
		 e.innerHTML = obj;
	     };
	     return result
	 }
	 
	 function callbackIpfsIo(tag) {
	     console.log('callbackIpfsIo tag: '+tag)
	     const substi = obj => {
		 let e = document.getElementById(tag);
		 e.innerHTML = "<a href=https://ipfs.io/ipfs/"+obj+">"+obj+"</a>";
	     };
	     return substi
	 }
	 
	 function callbackIpfsLocal(tag) {
	     console.log('callbackIpfsLocal tag: '+tag)
	     const substi = obj => {
		 let e = document.getElementById(tag);
		 e.innerHTML = "<a href=http://127.0.0.1:5001/ipfs/"+obj+">"+obj+"</a>";
	     };
	     return substi
	 }
	 
	 function IpfsException(message) {
	     this.message = message;
	     this.name = "IpfsException";
	 }
