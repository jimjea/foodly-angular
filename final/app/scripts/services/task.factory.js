'use strict';

angular.module('finalApp').factory('TaskFactory', function ($q, $http) {
  var TaskFactory = {};
  TaskFactory.getTasks = function() {
    var deferred = $q.defer();
    $http.get('japanese.json').success(function(response) {
      deferred.resolve(response.tasks);
    }).error(function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };
  return TaskFactory;
});
