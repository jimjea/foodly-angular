'use strict';

describe('Main Controller Test Suite', function() {
	beforeEach(module('angular-books'));

	var MainController;
	var $scope;

	beforeEach(inject(function($controller, $rootScope) {
		$scope = $rootScope.$new();

		MainController = $controller('MainController as main', {
			$scope: $scope
		});
	}));

	it('should be defined', function() {
		expect(!!$scope).toBe(true);
	});

	it('should have a function to add a book', function() {
		expect($scope.books.length).toBe(3);

		$scope.addBook();

		expect($scope.books.length).toBe(4);
	});
});