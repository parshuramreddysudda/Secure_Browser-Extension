//Event handler for Javascript

$(function () {
	$('#toggle-eventJS').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.javascript.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.javascript.set({
					primaryPattern: "<all_urls>",
					setting: "allow",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})

//Event Handler for Camera

$(function () {
	$('#toggle-eventCam').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.camera.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.camera.set({
					primaryPattern: "<all_urls>",
					setting: "ask",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})

//Event handler for Mic 


$(function () {
	$('#toggle-eventMic').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.microphone.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.microphone.set({
					primaryPattern: "<all_urls>",
					setting: "ask",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})



//Event handler for Cookies


$(function () {
	$('#toggle-eventCook').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.cookies.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.cookies.set({
					primaryPattern: "<all_urls>",
					setting: "allow",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})



//Event listener for location



$(function () {
	$('#toggle-eventLoc').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.location.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.location.set({
					primaryPattern: "<all_urls>",
					setting: "allow",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})



//Event Listener for PopUps

$(function () {
	$('#toggle-eventPop').change(function () {


			if ($(this).prop('checked')) {
				chrome.contentSettings.popups.set({
					primaryPattern: "<all_urls>",
					setting: "block",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			} else {
				chrome.contentSettings.popups.set({
					primaryPattern: "<all_urls>",
					setting: "allow",
					scope: "regular"
				});
				chrome.tabs.query({
					active: true,
					currentWindow: true
				}, function (arrayOfTabs) {
					var code = 'window.location.reload();';
					chrome.tabs.executeScript(arrayOfTabs[0].id, {
						code: code
					});
				});
			}


		}

	)
})



