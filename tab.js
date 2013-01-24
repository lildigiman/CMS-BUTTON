'use strict';

document.addEventListener('DOMContentLoaded', function() {
	console.log('here');
	document.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target && e.target.nodeName === 'A') {
			//console.log(e.target);
			chrome.tabs.create({url: e.target.href});
		}
	});
});
