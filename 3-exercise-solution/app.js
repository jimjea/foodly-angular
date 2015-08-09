'use strict';
/**********************************************
 **** Exercise 3: Interacting with the UI ****


Outcome: Trigger a small piece of business logic from the view.

1.  Define an 'incrementCount' function that will
	increment a value in a scope variable.

2.  incrementCount should be invoked from the template,
	throw a click event.

3.  On invocation of 'incrementCount', count variable should
	increase by 1.

4.	Scope Variables should be displayed in the template with double
	curly braces.

**********************************************/
angular.module('angular-books', []).controller('MainController', function($scope) {
	$scope.count = 1;
	$scope.book = 'My book.';
	$scope.incrementCount = function() {
		$scope.count++;
	};
});