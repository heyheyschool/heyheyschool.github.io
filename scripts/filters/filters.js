var todoAppFilters = angular.module('todoApp.filters', []);

todoAppFilters.filter('hoofdletterFilter', function() {
	
	return function(input) {
		console.log("input " + input);
		var test =  input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
		return test;
	};

});