var s = document.createElement('script');
s.src = chrome.runtime.getURL('live/live.js');
s.onload = function() {
/* 	var s = document.createElement('script');
	s.src = chrome.runtime.getURL('live/liverunner.js');
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s); */
};
(document.head || document.documentElement).appendChild(s);