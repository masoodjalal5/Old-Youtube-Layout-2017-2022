/*
Install Tampermonkey or any-other userscript extension and copy this code and paste it there.
Some color changes to make it not so sharp black and made the buttons boxy.
Other than that nothing much in here.
*/

"use strict";
// ==UserScript==
// @name         Old Youtube Layout 2017-2022
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Just hate the new Youtube UI so i tinkered with it to make it look like the old one. Not a great sucess but it gets half the work done.
// @author       Masood Jalal
// @match        https://chrome.google.com/webstore/detail/youtube-redux/mdgdgieddpndgjlmeblhjgljejejkikf?hl=en
// @icon         https://www.youtube.com/favicon.ico
// @include      *youtube.com*
// @match        www.youtube.com/*
// @grant        none
// ==/UserScript==

var styleSheet = "" +
"html[darker-dark-theme][dark], [darker-dark-theme] [dark]{background:#252525 !important;}"+
"ytd-app:not([use-content-visibility]) #page-manager.ytd-app{background: #121212;}"+
"#thumbnail, " +
"#voice-search-button > ytd-button-renderer > yt-button-shape > button" +
"{border-radius: 0px;}" +
"#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button, " +
"#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button, " +
"#top-level-buttons-computed > ytd-button-renderer > yt-button-shape > button, " +
"#flexible-item-buttons > ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button, " +
"#flexible-item-buttons > ytd-button-renderer:nth-child(2) > yt-button-shape > button, " +
"#flexible-item-buttons > ytd-button-renderer:nth-child(3) > yt-button-shape > button, " +
"#button-shape > button" +
"{border-radius: 0px; background: #121212 !important;}" +
"ytd-searchbox[desktop-searchbar-style=rounded_corner_borders_light_btn] #container.ytd-searchbox{border-radius: 0.5rem 0 0 0.5rem;}" +
"ytd-searchbox[desktop-searchbar-style=rounded_corner_borders_light_btn] #search-icon-legacy.ytd-searchbox{border-radius: 0 0.5rem 0.5rem 0;}" +
"#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button > div > span{color: white;}" +
"#description{background: #121212 !important; border-top: solid #888 0.2px !important;}" +
"ytd-watch-metadata[clickable-description][description-collapsed] #description.ytd-watch-metadata{border-radius: 0rem;}" +
"#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button{background: #d71e18; border-radius: 1rem;}";

(function() {
    var s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = styleSheet;
    (document.Head || document.documentElement).appendChild(s);
})();
