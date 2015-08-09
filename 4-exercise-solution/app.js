'use strict';
/**********************************************
 **** Exercise 4: Directives Continued ****

Outcome: Use arrays within AngularJS and experiment with another 
directive to loop through and display the array from the template.

1.  Create an array of 'books', in the scope object.

2.  Create "addBook" method to generate a book and book number,
	and add it to the 'books' array.

3.  addBook should be invoked on click event from template.

4.	Use ng-repeat directive to recursively loop through the array,
	and display atomic elements in the 'books' array.

**********************************************/
angular.module('angular-books', []).controller('MainController', function($scope) {
	$scope.books = [
		'Book 1',
		'Book 2',
		'Book 3'
	];
	var count = $scope.books.length;
	$scope.addBook = function() {
		$scope.books.push('Book ' + ++count);
	};
});