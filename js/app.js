define(["jquery", "getMicrodata", "getTemplates", "getPartials", "chooseTemplate", "applyBootstrap"], 
		function ($, getMicrodata, getTemplates, getPartials, chooseTemplate, applyBootstrap) {
	'use strict';
	return function initialize() {
		// get metadata from page
		var view = getMicrodata('body');
	
		// get the actual page ID - needed to find the right template
		var templateId = chooseTemplate(view);
	
		// render the right template from the template list
		$("body").html(getTemplates[templateId](view, getPartials));
	
		// apply Bootstrap stuff
		applyBootstrap();
	
		// show body when done
		$('body').removeClass("loading");
	};
});