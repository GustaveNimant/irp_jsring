	 function mfsPathOfForm(form) {
	     console.log('mfsPathOfForm.input.form:',form);

	     let name = form.name;
	     console.log('mfsPathOfForm.name:',name);

	     let result = form.elements[0].value;
	     console.log('mfsPathOfForm.result:',result);
	     return result;
	 }	     

	 function updateElementOfIdOfValue (id, value) {
	     console.log('updateElementOfIdOfValue.input.id:',id);
	     console.log('updateElementOfIdOfValue.input.value:',value);

	     let doc = document.getElementById(id);
	     doc.innerHTML = value;
	 }

	 function getFormOfName(nameForm) {
	     console.log('getFormOfName.nameForm:',nameForm);

	     let forms = document.getElementsByName(nameForm);
	     console.log('getFormOfName.forms:',forms);

	     let form = forms[0];
	     let name = form.name;
	     console.log('getFormOfName.name:',name);
	     console.log('getFormOfName.form:',form);

	     let elements = form.elements;
	     console.log('getFormOfName.elements:',elements);
	     for (let e=0; e <elements.length; e++) {
 		 let ele = elements[e];
		 console.log('getFormOfName.ele:',ele);
		 console.log('getFormOfName.ele.id:',ele.id);
		 console.log('getFormOfName.ele.type:',ele.type);
		 console.log('getFormOfName.ele.name:',ele.name);
		 console.log('getFormOfName.ele.value:',ele.value);
	     }

	     return form;
	 }

	 function valueInputOfFormOfNameOfId(forNam, curNam, curId) {
	     console.log('valueInputOfNameOfId.input.forNam',forNam);
	     console.log('valueInputOfNameOfId.input.curNam',curNam);
	     console.log('valueInputOfNameOfId.input.curId',curId);

	     let form = getFormOfName(forNam);
	     
  	     let elements = form.elements;
	     console.log('valueInputOfFormOfNameOfId.elements:',elements);
	     
	     var result = "";
	     for (let e=0; e <elements.length; e++) {
		 let ele = elements[e];
		 if (ele.id == curId && ele.name == curNam) {
		     result = ele.value
		 }
	     }
	     console.log('valueInputOfFormOfNameOfId.result:',result);
	     return result;
	 }
	 
	 function valueInputOfNameOfId(curNam, curId) {
	     console.log('valueInputOfNameOfId.input.curNam',curNam);
	     console.log('valueInputOfNameOfId.input.curId',curId);
	     
	     let names = document.getElementsByName(curNam);
	     console.log('valueInputOfNameOfId.names',names);

	     var result = "";
	     for (let n=0; n <names.length; n++) {
		 if (names[n].id == curId) {
		     result = names[n].value;
		 }
	     }
	     console.log('valueInputOfNameOfId.result',result);
	     return result
	 }

