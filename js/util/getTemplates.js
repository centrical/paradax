define(
	[
		"hgn!templates/404",
		"hgn!templates/about",
		"hgn!templates/blog",
		"hgn!templates/blog-post",
		"hgn!templates/faq",
		"hgn!templates/home",
		"hgn!templates/documentation"
	], 
	function (
		error,
		about,
		blog,
		blogPost,
		faq,
		home,
		documentation
	) 
	{
		'use strict';
	
		var getTemplates = {
			"404": error,
			"about": about,
			"blog": blog,
			"blogPost": blogPost,
			"faq": faq,
			"home": home,
			"documentation": documentation
		}
		return getTemplates;    
	}
);