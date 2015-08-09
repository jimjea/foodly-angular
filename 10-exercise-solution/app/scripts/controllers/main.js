'use strict';

/**
 * @ngdoc function
 * @name exercise10SolutionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exercise10SolutionApp
 */
angular.module('exercise10SolutionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
