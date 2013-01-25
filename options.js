/* Saves options to localStorage.
 * You'll lose options if you clear cache
 * TODO: capture data from <input type="text"> fields
 */
function save_options() {
	
	console.log(classes)
	
  localStorage['classes'] = JSON.stringify(classes);
}

/*
 * Adds a new input field for a second and third url link
 */
function add_new_field() {
	var element = document.createElement('div');
	element.setAttribute('class', 'link');
	element.innerHTML = 
		"<br /><input type='text' name='name'></input><input type='text' name='url'></input>";
	document.getElementById('urlInput').appendChild(element);
	console.log("Appended child");
}

/* Restores select box state to saved value from localStorage.
 * TODO: make it restore into individual <input type="text"> fields
 */
function restore_options() {
	classes = JSON.parse(localStorage['classes']);
	document.getElementById('urlInput').innerHTML = classesString;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#addMore').addEventListener('click', add_new_field);
