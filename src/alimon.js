/**
 * HubBoxx PHP Api Plugin v1.1.5
 * dependency loader
 * var src_url is the url to include all required resources 
 * from either public/src or src directories
 * url can be auto generated by passing data-url in the alimon.js loader script tag
 *
 * Copyright 2020, ToneFlix PHP
 * Released under the MIT license
 */
var src_url;

var _script = document.querySelector('[data-current="true"]');

if (typeof _script !== "undefined") {
	var current_src = _script.getAttribute('data-src');
	var _endpoint   = _script.getAttribute('data-endpoint');

	if (_endpoint) {
		current_src += _endpoint + "/";
	}

	if (typeof current_src !== "undefined") {
		var src_url = current_src.replace(/(\w+\b)(\.min.js\b\/|\.js\/|\.min.js\b|\.js\b)/gi, "");
	}
}
 
if (typeof src_url === "undefined") {
	src_url = "https://cdn.jsdelivr.net/gh/3m1n3nc3/ourzobia-api@1/src/";
} 

// If jquery does not exist, load the latest version from CDN
if (typeof $ === 'undefined') {
	var script = document.createElement("script");
	script.src = "https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"; 
	document.getElementsByTagName("head")[0].appendChild(script);
} 

var head = document.getElementsByTagName("head")[0];

// load cookie.js
var script1 = document.createElement("script");
script1.async = true;
script1.src = src_url+"js.cookie.js?origin=alimon.js";
script1.setAttribute('crossorigin','*');
head.appendChild(script1); 
 
// Load alimontaziba.js
var script2 = document.createElement("script");
script2.async = true;
script2.src = src_url+"alimontaziba.js?origin=alimon.js";
script2.setAttribute('crossorigin','*');
head.appendChild(script2);

// Load alimon.css
var style = document.createElement("link");
style.rel = "stylesheet";
style.href = src_url+"alimon.css?origin=alimon.js"; 
head.insertBefore(style, head.getElementsByTagName("link")[0]); 