let PELL_NUMBER = 11;
var root = createRootDiv('PellRoot');

startPell(root);

function startPell(rootNode) {
	var first = pell(PELL_NUMBER, 'root');
	rootNode.innerHTML = "<h2>Pell</h2>";
	rootNode.appendChild(first);
}

function pell(n, alignmentClass) {

	var div = document.createElement('div');
	div.setAttribute('class', alignmentClass + ' pell');

	if (n < 2) {
		div.setAttribute('num', n.toString());
		var clas = div.getAttribute('class');
		div.setAttribute('class', clas + ' container');
	} else {
		var container = document.createElement('div');
		container.setAttribute('class', 'container');

		var l = pell(n - 1, 'left');
		container.appendChild(l);


		var r = pell(n - 2, 'right');
		container.appendChild(r);

		div.appendChild(container);
	}

	calculatePellValue(div, n);
	return div;
}

function calculatePellValue(node, n) {
	var children = node.children;
	console.log('num children: ' + children.length);

	var childValue = [];
	if (children.length === 0) {
		value = node.getAttribute('num');
	} else {

		if ((children[0].getAttribute('class').includes('container'))) {
			children = children[0].children;
		}
		for (var i = 0; i < children.length; i++) {
			childValue.push(parseInt(children[i].getAttribute('num')));
		}

		var value = 2*childValue[0]+childValue[1];
	}
	node.innerHTML = 'Pell(' + n + ')=' + value + node.innerHTML;
	node.setAttribute('num', value.toString());
}




