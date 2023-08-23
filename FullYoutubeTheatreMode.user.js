// ==UserScript==
// @name        Full Youtube Theatre Mode
// @namespace   https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode
// @version     0.3
// @description Enlarges the media player to fill the entire screen with theatre mode.
// @author      adeFuLoDgu
// @include     https://www.youtube.com/*
// @updateURL   https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode/raw/main/FullYoutubeTheatreMode.user.js
// @downloadURL https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode/raw/main/FullYoutubeTheatreMode.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

/**
A simple script to fix youtube's CSS to set the containers height to 100vh - navbar height
**/

// Injects CSS into the header of the document.
function addStyle(styleText){
	let s = document.createElement('style');
	s.setAttribute("id", "youtubetheater");
	s.appendChild(document.createTextNode(styleText));
	document.getElementsByTagName('head')[0].appendChild(s);
}

setInterval(loadCss,1000);

function loadCss(){
	'use strict';
	if(document.getElementById("youtubetheater")){return;}
	// Applys css to the page to resize the media player to the entire screen.
	addStyle(`
		ytd-watch-flexy[theater-requested_] #full-bleed-container{
			min-height:calc(100vh - 56px)!important;
		}
	`);
};
