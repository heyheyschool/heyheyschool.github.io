describe("Filters: hoofdletterFilter en boldFilter", function() {

	var filter;
	beforeEach(function(){
		module("todoApp.filters"); 

		inject(function($filter){
			filter = $filter('hoofdletterFilter');

		});
	});

	it("should make the first letter capitalized", function() {
		var input = "hallo";
		var output = "Hallo";

		expect(filter(input)).toBe(output);
	});

	it("should make the first letter capitalized, and the second not", function() {
		var input = "sChool";
		var output = "School";

		expect(filter(input)).toBe(output);
	});

	it("should make still work, and not throw an error if the letter is capitalized", function() {
		var input = "Angular";
		var output = "Angular";

		expect(filter(input)).toBe(output);
	});

});

