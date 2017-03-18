let TRIB_NUMBER = 11;
var root = createRootDiv('TribRoot');

startTrib(root);

function startTrib(rootNode) {
	var first = trib(TRIB_NUMBER, 'root');
	rootNode.innerHTML = "<h2>Tribonacci</h2>";
	rootNode.appendChild(first);
}

function trib(n, alignmentClass) {

	var div = document.createElement('div');
	div.setAttribute('class', alignmentClass + ' trib');

	if (n < 3) {
		if (n === 2) {
			div.setAttribute('num', 1);;
		} else {
			div.setAttribute('num', n.toString());
		}
		var clas = div.getAttribute('class');
		div.setAttribute('class', clas + ' container');
	} else {
		var container = document.createElement('div');
		container.setAttribute('class', 'container');

		var l = trib(n - 1, 'left');
		container.appendChild(l);

		var c = trib(n - 2, 'center');
		container.appendChild(c);


		var r = trib(n - 3, 'right');
		container.appendChild(r);

		div.appendChild(container);
	}

	calculateTribValue(div, n);
	return div;
}

function calculateTribValue(node, n) {
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
	node.innerHTML = 'Trib(' + n + ')=' + value + node.innerHTML;
	node.setAttribute('num', value.toString());
}