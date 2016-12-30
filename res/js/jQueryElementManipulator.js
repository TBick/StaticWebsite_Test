
var clickCount = 0;
var flag = true;

function setEventListeners() {

	$('#clicks').click(function() {
		clickCount++;
		$(this).text(String(clickCount));
	});

	$('#status').click(function() {
		flag = !flag;
		$(this).text(String(flag).toUpperCase());
	});

}


$(document).ready(function() {
	setEventListeners();

	$('#clicks').text(String(clickCount));
	$('#status').text(String(flag).toUpperCase());
});