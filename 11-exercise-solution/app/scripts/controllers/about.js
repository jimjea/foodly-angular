'use strict';

/**
 * @ngdoc function
 * @name exercise11SolutionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exercise11SolutionApp
 */
angular.module('exercise11SolutionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
