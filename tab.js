'use strict';

document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target && e.target.nodeName === 'A') {
			chrome.tabs.create({url: e.target.href});
		}
	});
});
