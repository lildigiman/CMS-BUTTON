// Saves options to localStorage.
//You'll lose options if you clear cache
function save_options() {
	var classesRaw = document.getElementById('classData').value;
	var classes = classesRaw.split('\n');
	classes.forEach(function(item, index) {
		classes[index] = item.split(','); 
	});
	console.log(classes)
	
  localStorage['classes'] = JSON.stringify(classes);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var classesString
    , classes
    , localClasses = localStorage['classes'];
  //If we try to JSON.parse and localStorage has nothing, it'll throw an error.
  //Thus the intermidiary step.
  if (!localClasses) {
    return;
  }
  classes = JSON.parse(localStorage['classes']);
  
  for (var i = 0; i < classes.length; i++) {
    classesString = classes[i].join();
  }
  document.getElementById('classData').value = classesString;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
