define(["jquery", "getMicrodata", "getTemplates", "getPartials", "chooseTemplate", "bootstrap"], 
		function ($, getMicrodata, getTemplates, getPartials, chooseTemplate) {
	'use strict';
	return function initialize() {
		// get metadata from page
		var view = getMicrodata('body');
	
		// get the actual page ID - needed to find the right template
		var templateId = chooseTemplate(view);
		
		if ($("body").attr("id") == "home") {
			view['home'] = true;
		}
		// render the right template from the template list
		$("body").html(getTemplates[templateId](view, getPartials));
		document.body.style.display='block';
		
	};
});