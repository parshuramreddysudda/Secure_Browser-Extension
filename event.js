
 $(function() {
    $('#toggle-eventJS').change(function() {
	    
	
	    if($(this).prop('checked'))
	    {
		      chrome.contentSettings.javascript.set({
    primaryPattern: "<all_urls>",
    setting: "block",
    scope: "regular"
  });
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(arrayOfTabs) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(arrayOfTabs[0].id, {
      code: code
    });
  });
	    }
	    else{
		      chrome.contentSettings.javascript.set({
    primaryPattern: "<all_urls>",
    setting: "allow",
    scope: "regular"
  });
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(arrayOfTabs) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(arrayOfTabs[0].id, {
      code: code
    });
  });
	    }
	    
	    
    }
				     
)
  })




camOff.bind('click', function() {
  chrome.contentSettings.camera.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  });
  document.getElementById('camOff').style.display = 'none';
  document.getElementById('camOn').style.display = 'block';
});
camOn.bind('click', function() {
  chrome.contentSettings.camera.set({
    primaryPattern: "<all_urls>",
    setting: "ask"
  });
  document.getElementById('camOn').style.display = 'none';
  document.getElementById('camOff').style.display = 'block';
});

let micOff = $('#micOff');
let micOn = $('#micOn');



micOff.bind('click', function() {
  chrome.contentSettings.microphone.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  });
  document.getElementById('micOff').style.display = 'none';
  document.getElementById('micOn').style.display = 'block';
});
micOn.bind('click', function() {
  chrome.contentSettings.microphone.set({
    primaryPattern: "<all_urls>",
    setting: "ask"
  });
  document.getElementById('micOn').style.display = 'none';
  document.getElementById('micOff').style.display = 'block';
});




let locOff = $('#locOff');
let locOn = $('#locOn');

locOff.bind('click', function() {
  chrome.contentSettings.location.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  });
  document.getElementById('locOff').style.display = 'none';
  document.getElementById('locOn').style.display = 'block';
});
locOn.bind('click', function() {
  chrome.contentSettings.location.set({
    primaryPattern: "<all_urls>",
    setting: "allow"
  });
  document.getElementById('locOn').style.display = 'none';
  document.getElementById('locOff').style.display = 'block';
});



let popOff = $('#popOff');
let popOn = $('#popOn');

popOff.bind('click', function() {
  chrome.contentSettings.popups.set({
    primaryPattern: "<all_urls>",
    setting: "block"
  });
  document.getElementById('popOff').style.display = 'none';
  document.getElementById('popOn').style.display = 'block';
});
popOn.bind('click', function() {
  chrome.contentSettings.popups.set({
    primaryPattern: "<all_urls>",
    setting: "allow"
  });
  document.getElementById('popOn').style.display = 'none';
  document.getElementById('popOff').style.display = 'block';
});
