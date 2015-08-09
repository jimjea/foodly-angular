'use strict';

/**********************************************
 **** Exercise 6: Factory/Service/Provider ****

1.  Write a factory, a service, and a provider 
    that each have a function named "greet".

2.  "greet" should take one argument called
	"name"   - i.e.  greet(name) - 

3.  On invocation greet should output a simple
	greeting addressed to the name value passed
	into it  - e.g. "Hello <name>"

4.  Inject each (factory/service/provider) 
	into a controller and display the output to 
	the page

**********************************************/


angular.module('angular-books', [])

.factory('exampleFactory', function(){
	function greetFunction(name){ 
		return 'Greetings ' + name + ', how are you?'; 
	};

	// return an object with exposed functions/variables in the closure
	return { greet: greetFunction }
})

.service('exampleService', function(){
	// this function becomes the constructor resulting in an object

	this.greet = function(name){
		return 'Greetings ' + name + ', how are you?';
	};
})

.provider('exampleProvider', function(){
	// $get is executed and the provider is the return value
	
	this.$get = function(){
		return {
			greet: function(name){ 
				return 'Greetings ' + name + ', how are you?'; 
			}
		};
	};
})


.controller('MainController', function($scope, exampleFactory, exampleService, exampleProvider){

		$scope.factory = exampleFactory.greet("I'm a exampleFactory");
		$scope.service = exampleService.greet("I'm exampleService");
		$scope.provider = exampleProvider.greet("I'm exampleProvider");
});
