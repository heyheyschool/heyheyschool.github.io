describe('E2E: HomeController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/info');
    });

    it('should display a list of all factory items', function() {
    var rows = element.all(by.repeater('info in data')).count();
    expect(rows).toBe(3);
  });

});