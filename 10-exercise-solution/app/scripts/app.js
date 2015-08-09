'use strict';

/**
 * @ngdoc overview
 * @name exercise10SolutionApp
 * @description
 * # exercise10SolutionApp
 *
 * Main module of the application.
 */
angular
  .module('exercise10SolutionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
