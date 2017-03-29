//'use strict';

(function() {
  describe('Datafactory check the data', function() {
    var DataFactory;

    beforeEach(module('todoApp'));
    beforeEach(inject(function (DataFactory) {
      DataFactory = DataFactory;
    }));

    it('DataFactory should exist', function() {
        expect(DataFactory).toBeTruthy();
    });

    it('DataFactory should not be null', function(){
		expect(DataFactory.getAllData()).not.toBeNull();
    });

    it('should check the DataFactory data', function() {
    	var input = [
        "Op deze website kan je todo lijsten aanmaken",
    	"Ook kan je ze wijzigen en verwijderen",
    	"Op deze pagina zie je afbeeldingen"
    	];

    	var output = DataFactory.getAllData();
		expect(DataFactory('input')).toBe('output');
	});

  });
});