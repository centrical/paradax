define(["jquery", "microdata", "microdataJson"], function() {
	'use strict';
	return function getMicrodata(selector) {
		var jsonHtml = $.microdata.json(selector, function(o) {
			return o;
		});
		// adding descriptive property for itemType
		$.each(jsonHtml.items, function() {
			var typeUrl = this.type[0];
			var typeTitle = typeUrl.substr(typeUrl.lastIndexOf('/') + 1);
			this[typeTitle] = true;
		});
		//console.log(jsonHtml);
		return jsonHtml
	};
});