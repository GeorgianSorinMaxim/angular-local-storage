describe('Protractor and Selenium test', function() {
  // Mimic user interaction by opening the webpage and click on the hit and reset buttons.
  it('Open the page', function() {
    browser.get('http://127.0.0.1:8080/');
    expect(browser.getTitle()).toEqual('Bee Game');  
  });

  it('Hit the reset button', function() {
	  var reset = element.all(by.css('.reset'));
	  reset.click();
    var queenBee = document.getElementById('1');;
    expect(queenBee.lifespan.toEqual('100');
  });
});   