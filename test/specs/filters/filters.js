describe("Filters: hoofdletterFilter en boldFilter", function() {

	var filter;
	beforeEach(function(){
		module("todoApp.filters"); 

		inject(function($filter){
			filter = $filter('hoofdletterFilter');

		});
	});

	it("should make the first letter capitalized", function() {
		var input = "hAllo";
		var output = "Hallo";

		expect(filter(input)).toBe(output);
	});

	/*var filter2;
	beforeEach(function(){
		module("todoApp.filters2"); 

		inject(function($filter){
			filter2 = $filter('boldFilter');

		});
	});*/

});

