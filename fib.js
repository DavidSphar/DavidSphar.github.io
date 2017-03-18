let FIB_NUMBER = 11;
var root = createRootDiv('FibRoot');

startFib(root);

function startFib(rootNode) {
	var first = fib(FIB_NUMBER, 'root');
	rootNode.innerHTML = "<h2>Fibonacci</h2>";
	rootNode.appendChild(first);
}

function fib(n, alignmentClass) {

	var div = document.createElement('div');
	div.setAttribute('class', alignmentClass + ' fib');

	if (n < 2) {
		div.setAttribute('num', n.toString());
		var clas = div.getAttribute('class');
		div.setAttribute('class', clas + ' container');
	} else {
		var container = document.createElement('div');
		container.setAttribute('class', 'container');

		var l = fib(n - 1, 'left');
		container.appendChild(l);


		var r = fib(n - 2, 'right');
		container.appendChild(r);

		div.appendChild(container);
	}

	calculateFibValue(div, n);
	return div;
}

function calculateFibValue(node, n) {
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
	node.innerHTML = 'Fib(' + n + ')=' + value + node.innerHTML;
	node.setAttribute('num', value.toString());
}


