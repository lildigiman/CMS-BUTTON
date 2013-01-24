'use strict';

document.addEventListener('DOMContentLoaded', function() {
  //Generate the link content
  var localClasses = localStorage['classes']
    , classList = document.getElementById('classList')
    , classes
    , classesString = '';
  if(!localClasses) {
    classList.innerHTML = 'You need to add some classes, mate.';
  } else {
    classes = JSON.parse(localClasses);
    classes.forEach(function(item) {
      classesString += '<a href="' + item[1] + '"><li>' + item[0] + '</li></a>\n';
    });
    classList.innerHTML = classesString
  }
  //Event delegator so we can have any number of links
	document.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target && e.target.nodeName === 'LI') {
			chrome.tabs.create({url: e.target.parentNode.href});
		}
	});
});
