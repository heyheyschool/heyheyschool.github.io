describe('E2E: tController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/home');
    });
    
    it('should display a proper h1 message', function() {

        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toBe("Home page");
    });

});