'use strict';

/**********************************************
 **** Exercise 5: Routing with ui-router ****


Outcome: Understand how routing and states are implemented in angularjs.

1.  Define a config for the angular-books app.
	Inject the ui.router dependency into the 
	angular-books module. Pass in the stateProvider
	and the urlRouterProvider.

2.	Define two states in the config (book1 & book2).

3.	Assign url route, define an inline template for both states.

4.  Create a "BookController" for the angular-books app.

5.	In the "BookController" add a function 'goToBook2'
	to the controller's scope object.

6.  Bind "BookController" to the (book1) state template.

7. 	Trigger the 'goToBook2' method from ng-click binding
	in the (book1) state template



**********************************************/

angular.module('angular-books', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('book1', {
		url: '/book1',
		template: '<h1>Book 1</h1><button ng-click="goToBook2()">Go to Book 2</button>',
		controller: 'BookController'
	})
	.state('book2', {
		url: '/book2',
		template: '<h1>Book 2</h1><a ui-sref="book1">Go to Book 1</a>'
	});
	$urlRouterProvider.otherwise('/book1');
});

angular.module('angular-books').controller('BookController', function($scope, $state) {
	$scope.goToBook2 = function() {
		$state.go('book2');
	};
});