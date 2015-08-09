'use strict';

/**
 * @ngdoc function
 * @name exercise11SolutionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exercise11SolutionApp
 */
angular.module('exercise11SolutionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
