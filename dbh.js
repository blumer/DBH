
document.addEventListener('DOMContentLoaded', function() {

    var sidebyside = document.getElementById('sbs');
    var stacked = document.getElementById('stacked');
    var video = document.getElementById('video');
    var chatwindow = document.getElementById('chat-window');
    
    sidebyside.addEventListener('click', function() {
    	stacked.removeAttribute("class");
    	video.removeAttribute("class");
    	sidebyside.className = "current";
    	chatwindow.style.display = "inline-block";
    	window.resizeTo(820, 350);

    });
    
    
    stacked.addEventListener('click', function() {
	    stacked.className = "current";
    	sidebyside.removeAttribute("class");
    	video.removeAttribute("class");
    	chatwindow.style.display = "inline-block";
        window.resizeTo(420, 650);
	});
	
	video.addEventListener('click', function() {
	    video.className = "current";
    	sidebyside.removeAttribute("class");
    	stacked.removeAttribute("class");
		chatwindow.style.display = "none";
        window.resizeTo(420, 350);
	});
	
	var close = document.getElementById("close");
	close.addEventListener('click', function() {
	    window.close();
  	});
});


