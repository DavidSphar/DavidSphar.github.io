
var body = document.body;

function setupBasicPage() {
	document.title = 'Dsphar Javascript Page';
	document.write('<link rel="stylesheet" type="text/css" href="style.css">');
	var div = document.createElement('div');
	div.setAttribute('id','top');
	var p = document.createElement('p');
	p.innerHTML="Hello World!";
	div.appendChild(p);
	body.appendChild(div);
}
setupBasicPage();

function buildFormulaDiv(divId){
	var div = document.createElement('div');
	div.setAttribute('class','formulaTop');
	div.setAttribute('id',divId);
	body.appendChild(div);
	div.innerHTML=divId;
}
buildFormulaDiv('Fib');

