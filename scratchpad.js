
function loadJs(filename)
{
	var head = document.getElementsByTagName('head')[0];
	
	script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	
	head.appendChild(script)
}

function setupPage() {
	 	document.title = 'Dsphar Javascript Page';
		document.write('<link rel="stylesheet" type="text/css" href="./style.css">');
		loadJs('util.js');
}

setupPage();
loadJs('fib.js');
loadJs('trib.js');
loadJs('pell.js');