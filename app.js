(function(){
	'use strict';
	angular
	.module('myApp', ['appRoutes','ngMaterial','ngFileUpload'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.primaryPalette('cyan')
    		.accentPalette('light-blue');
	});

	//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
})();