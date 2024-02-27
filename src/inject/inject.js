chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Plugin Started");
		const div = document.createElement('li');
		div.className = 'download';
		div.innerHTML = `
		<button class="inject" onclick="window.open('https://pony.fm/t'+document.querySelector('.song a').href.split('/')[4].split('-')[0]+'/dl.mp3', '_self');">D</button>
		<button class="inject" onclick="window.open('https://pony.fm/t'+document.querySelector('.song a').href.split('/')[4].split('-')[0]+'/dl.flac', '_self');">F</button>
	    `;
		var player = document.getElementsByClassName('buttons');
		var first_child = player[0];
		first_child.appendChild(div);
//		addScript();
		// ----------------------------------------------------------

	}
// var dl_link = document.querySelector('.song a').href; var pathArray = dl_link.split('/'); var name = pathArray[4]; var splitName = name.split('-'); var finalName = splitName[0]; window.open("https://pony.fm/t"+finalName+"/dl.mp3", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');	
// <button class="inject" onclick="var dl_link = document.querySelector('.song a').href; window.open(dl_link, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');">D</button>

	}, 10);

});
