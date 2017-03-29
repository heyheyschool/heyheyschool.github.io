describe('E2E: tController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/addlist');
    });  

  it('should display the form output after the form submit', function() {
    
    element(by.model('newItem.name')).sendKeys("AngularJS");
    element(by.model('newItem.name2')).sendKeys("School");
    element(by.model('newItem.comment')).sendKeys("Spa afmaken");
    element(by.model('newItem.priority')).sendKeys("High");

    element(by.id('submitButton')).click();

    expect(element(by.id('name')).getText()).toBe("AngularJS");
    expect(element(by.id('category')).getText()).toBe("School");
    expect(element(by.id('comment')).getText()).toBe("Spa afmaken");
    expect(element(by.id('priority')).getText()).toBe("High");

  });

});