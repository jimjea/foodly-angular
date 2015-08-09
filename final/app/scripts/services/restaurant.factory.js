'use strict';

angular.module('finalApp').factory('RestaurantFactory', function ($q, $http) {
  var RestaurantFactory = {};
  RestaurantFactory.getRestaurants = function() {
    var deferred = $q.defer();
    $http.get('yelp_japanese.json').success(function(response) {
      deferred.resolve(response.businesses);
    }).error(function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };
  return RestaurantFactory;
});
