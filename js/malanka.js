angular.module('Malanka', [])
  .controller('MalankaController', ['$scope', function($scope) {
    $scope.tasks = [
      {caption:'task 1', done:true},
      {caption:'task 2', done:false}];

    $scope.addTask = function() {
      $scope.tasks.push({caption:$scope.taskCaption, done:false});
      $scope.taskCaption = '';
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.tasks, function(task) {
        count += task.done ? 0 : 1;
      });
      return count;
    };

  }]);

