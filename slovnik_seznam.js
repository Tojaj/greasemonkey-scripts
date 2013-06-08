// ==UserScript==
// @name        Seznam Slovnik
// @namespace   http://tojaj.com
// @description Select query text after each playsound click + mapping playsond click to Ctrl
// @include     http://slovnik.seznam.cz/*
// @grant       none
// @version     1
// ==/UserScript==

var query_input = document.getElementById("q");
var playsound_link = document.getElementById("playsound");

playsound_link.onclick = function() {
    query_input.select()
};

document.onkeyup = function(e) {
    if (e.keyCode == 17) {
        playsound_link.click()
    } 
}
