'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalApp
 */
angular.module('finalApp').controller('JourneyController', function ($scope, TaskFactory, RestaurantFactory) {
  $scope.options = [
    { label: 'Most Recent', value: 'id'}, 
    { label: 'Highest Rated', value: 'rating'}, 
    { label: 'Top Reviewed', value: 'review_count'}
  ];

  $scope.setOption = function(option){
    $scope.selectedOption = option;
    $scope.optionProperty = 'restaurantInfo.' + option.value;
  };

  $scope.setOption($scope.options[0]);


  var addRestaurantToTask = function(restaurant) {
    angular.forEach($scope.tasks, function(task) {
      if (task.restaurant === restaurant.id) {
        task.restaurantInfo = restaurant;
      }
    });
  };

  TaskFactory.getTasks().then(function(tasks) {
    $scope.tasks = tasks;
    RestaurantFactory.getRestaurants().then(function(restaurants) {
      angular.forEach(restaurants, function(restaurant) {
        addRestaurantToTask(restaurant);
      });
    });
  });
});
