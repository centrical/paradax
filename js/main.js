requirejs.config(
	{
		baseUrl: "js",
		paths: {
			"app": "app",
			"domReady": "lib/domReady",
			"jquery": "lib/jquery",
			"bootstrap": "lib/bootstrap",
			"json2": "lib/json2",
			"Mustache": "lib/Mustache",
			"text": "lib/text",
			"hgn": "lib/hgn",
			"hogan": "lib/hogan",
			"microdata": "lib/microdata",
			"microdataJson": "lib/microdataJson",
			"getMicrodata": "util/getMicrodata",
			"getPartials": "util/getPartials",
			"getTemplates": "util/getTemplates",
			"chooseTemplate": "util/chooseTemplate",
			"templates": "../mustache/templates",
			"partials": "../mustache/partials"
		},
		shim: {
			"domReady": {
				exports: "domReady"
			},
			"jquery": {
				exports: "$"
			},
			"bootstrap": {
				deps: ["json2", "jquery"],
				exports: "$.fn.popover"
			},
			"hgn":{
				deps: ["json2", "Mustache", "text", "hogan"]
			},
			"getMicrodata":{
				deps: ["json2", "jquery", "json2", "microdataJson", "microdata"],
				exports: "getMicrodata"
			},
			"microdata": {
				deps: ["json2", "jquery"]
			},
			"microdataJson": {
				deps: ["json2", "jquery","microdata"]
			},
			"getTemplates":{
				deps: ["json2", "hgn"],
				exports: "getTemplates"
			},
			"getPartials":{
				deps: ["json2", "hgn"],
				exports: "getPartials"
			},
			"chooseTemplate":{
				deps: ["json2", "jquery"],
				exports: "chooseTemplate"
			}
		},
		hgn : {
			templateExtension : '.mustache'
		}
	}
);

require(['domReady', 'app'], function(domReady, initialize){
  		domReady(function () {initialize()});
	}
);