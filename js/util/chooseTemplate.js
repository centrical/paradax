define(["jquery"], function () {
	'use strict';
	
    return function chooseTemplate(view) {
    	
    	var templateId;
    	
    	// choose the right template based on top-level ItemTypes
		$.each(view.items, function() {
			var typeUrl = this.type[0];
			var typeTitle = typeUrl.substr(typeUrl.lastIndexOf('/') + 1);
			
			// typeTitles for header and footer are excluded - that's re-usable stuff to put in partials.
			if (typeTitle != "WPHeader" || typeTitle != "WPFooter") {
				switch (typeTitle)
				{
				case 'AboutPage':
				  templateId="about";
				  break;
				case 'Blog':
				  templateId="blog";
				  break;
				case 'BlogPosting':
				  templateId="blogPost";
				  break;
				case 'Article':
				  templateId="faq";
				  break;
				case 'TechArticle':
				  templateId="documentation";
				  break;
				};
			};
		});
		
		// for specific pages like the 404 and the home page, you can use the body ID as identification
		if (!templateId) {
			templateId=$('body').attr('id');
		}
		
		//console.log("templateId=" + templateId);
        return templateId
    };
});