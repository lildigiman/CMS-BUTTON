$(document).ready(function(){
	console.log("here");
	$('a').click(function(){
		chrome.tabs.create({url: $(this).attr('href')});
		return false;
	});
});
