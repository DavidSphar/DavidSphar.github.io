let Pell_NUMBER = 11;
var root = createRootDiv('PellRoot');

startFib(root);

function startFib(rootNode) {
	var first = fib(FIB_NUMBER, 'fib-root');
	rootNode.appendChild(first);
}

function fib(n, alignmentClass) {

	var div = document.createElement('div');
	div.setAttribute('class', alignmentClass + ' fib');

	if (n < 2) {
		div.setAttribute('num', n.toString());
		var clas = div.getAttribute('class');
		div.setAttribute('class', clas + ' fibContainer');
	} else {
		var container = document.createElement('div');
		container.setAttribute('class', 'fibContainer');

		var l = fib(n - 1, 'fib-left');
		container.appendChild(l);


		var r = fib(n - 2, 'fib-right');
		container.appendChild(r);

		div.appendChild(container);
	}

	calculateValue(div, n);
	return div;
}

function calculateValue(node, n) {
	var children = node.children;
	console.log('num children: ' + children.length);

	var value = 0;
	if (children.length === 0) {
		value = node.getAttribute('num');
	} else {

		if ((children[0].getAttribute('class').includes('fibContainer'))) {
			children = children[0].children;
		}
		for (var i = 0; i < children.length; i++) {
			value += parseInt(children[i].getAttribute('num'));
		}
	}
	node.innerHTML = 'Fib(' + n + ')=' + value + node.innerHTML;
	node.setAttribute('num', value.toString());
}


