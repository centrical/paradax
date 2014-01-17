define(["hgn!partials/navigation", "hgn!partials/header", "hgn!partials/sidebar","hgn!partials/footer"], function (navigation, header, sidebar, footer) {
	'use strict';
	
	var getPartials = {
		"navigation": navigation.template,
		"header": header.template,
		"sidebar": sidebar.template,
		"footer": footer.template
	}
	
	return getPartials;
    
});