define(["jquery", "bootstrap"], function () {
	'use strict';
	
    return function applyBootstrap() {
		// Activates Tooltips for Social Links
		$('.tooltip-social').tooltip({
			selector: "a[data-toggle=tooltip]"
		});
    };
});