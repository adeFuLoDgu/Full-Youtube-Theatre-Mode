// ==UserScript==
// @name        Full Youtube Theatre Mode
// @namespace   https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode
// @version     0.7
// @description Enlarges the media player to fill the entire screen with theatre mode.
// @author      adeFuLoDgu
// @match     	https://www.youtube.com/*
// @updateURL   https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode/raw/main/FullYoutubeTheatreMode.user.js
// @downloadURL https://github.com/adeFuLoDgu/Full-Youtube-Theatre-Mode/raw/main/FullYoutubeTheatreMode.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

function addStyle(styleText){
	let s = document.createElement('style');
	s.setAttribute("id", "youtubetheater");
	s.appendChild(document.createTextNode(styleText));
	document.getElementsByTagName('head')[0].appendChild(s);
}

function loadCss(){
	'use strict';
	if(document.getElementById("youtubetheater")){return;}
	addStyle(`
		ytd-watch-flexy[full-bleed-player] #full-bleed-container.ytd-watch-flexy{
			min-height:calc(100vh - 56px)!important;
		}
	`);
};

window.addEventListener("yt-navigate-finish", loadCss, true);
