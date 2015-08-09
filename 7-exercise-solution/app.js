'use strict';

/**********************************************
 **** Exercise 7: Custom Filter ****

 Create a custom filter that capitalizes the
 first character of every word in the inputted
 string.

 In a controller use the following array of 
 title to test

	$scope.titles = [
		'the Catcher in the Rye',
		'10 things To know about Angular',
		'A talE of TWO cities',
		'tHe HOBBIT'
	];

**********************************************/


angular.module('angular-books', [])

.filter('titleFilter', function(){

	return function(title){
		
		var words = title.split(' ');
		var outArray = [];

		words.forEach(function(word){ 
			return outArray.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()); 
		});

		return outArray.join(' ');
	};
})

.controller('MainController', function($scope){

	$scope.titles = [
		'the Catcher in the Rye',
		'10 things To know about Angular',
		'A talE of TWO cities',
		'tHe HOBBIT'
	];

});
