'use strict';

/**
 * @ngdoc overview
 * @name finalApp
 * @description
 * # finalApp
 *
 * Main module of the application.
 */
angular.module('finalApp', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('journeys', {
      url: '/journeys/:name',
      templateUrl: 'views/journey.html',
      controller: 'JourneyController'
    });
  $urlRouterProvider.otherwise('/journeys/japanese');
});