function createRootDiv(divId){
	var div = document.createElement('div');
	div.setAttribute('id',divId);
	var p = document.createElement('p');
	div.appendChild(p);
	document.body.appendChild(div);
	return div;
}

function calculateValue(node, n, formulaName) {
	var children = node.children;
	console.log('num children: ' + children.length);

	var value = 0;
	if (children.length === 0) {
		value = node.getAttribute('num');
	} else {

		if ((children[0].getAttribute('class').includes('container'))) {
			children = children[0].children;
		}
		for (var i = 0; i < children.length; i++) {
			value += parseInt(children[i].getAttribute('num'));
		}
	}
	node.innerHTML = formulaName + '(' + n + ')=' + value + node.innerHTML;
	node.setAttribute('num', value.toString());
}