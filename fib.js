let FIB_NUMBER = 11;
var root = createRootDiv('FibRoot');

startFib(root);

function startFib(rootNode) {
	var first = fib(FIB_NUMBER, 'root');
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

	calculateValue(div, n, 'Fib');
	return div;
}


