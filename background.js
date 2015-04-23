chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('dbh.html', {
    'bounds': {
      'width': 820,
      'height': 350
    },
    frame: { type: "none" }
  });
  
  chrome.commands.onCommand.addListener(function(command) {
	alert("SWITCH");
	console.log("Command:", command);
	});

});

