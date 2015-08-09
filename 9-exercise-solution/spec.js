// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
  	//Create variables
  	var s = 'Write more tests!';
    browser.get('http://todomvc.com/examples/angularjs/#/');
    
	//Type in todo.
    element(by.model('newTodo')).sendKeys(s);

    //Hit enter!
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    var todoList = element.all(by.repeater('todo in todos'));

    //Perform Validations
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual(s);
  });
});