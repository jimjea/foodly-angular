'use strict';

/**
 * @ngdoc function
 * @name exercise10SolutionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exercise10SolutionApp
 */
angular.module('exercise10SolutionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
