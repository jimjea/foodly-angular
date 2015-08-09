'use strict';

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