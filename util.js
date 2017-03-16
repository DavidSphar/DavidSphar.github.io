function createRootDiv(divId){
	var div = document.createElement('div');
	div.setAttribute('id',divId);
	var p = document.createElement('p');
	div.appendChild(p);
	document.body.appendChild(div);
	return div;
}