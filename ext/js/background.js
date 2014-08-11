var clicked = false;
chrome.browserAction.onClicked.addListener(function () {
	if (clicked) {
		return;
	}
	clicked = true;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://door.mondora.com/open");
	xhr.send();
	setTimeout(function () {
		clicked = false;
	}, 1000);
});
