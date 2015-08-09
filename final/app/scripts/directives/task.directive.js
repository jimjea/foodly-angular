'use strict';

angular.module('finalApp').directive('task', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/task.html',
    scope: {
      info: '='
    }
  };
});