'use strict';

/**********************************************
 **** Exercise 1: A Simple Directive ****

Outcome: Use a simple directive with Angularjs.

1.  Write a simple directive, with an inline 
	template displaying the term 'My Book'.

2.  'My book.' should be defined in a scope 
	variable.

3.  On invocation an <angular-books> directive
	should bring in a simple template that
	displays the scope variable.

**********************************************/

angular.module('angular-books', []).directive('book', function() {
	return {
		template: '<p>Book: {{book}}</p>',
		link: function(scope) {
			scope.book = 'My book.';
		}
	};
});
