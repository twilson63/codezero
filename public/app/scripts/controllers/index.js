app.controller('Index', function($scope, $http) {
  $scope.codename = 'Not Specified'
  $scope.generate = function() {
    $scope.codename = 'Generating.......';
    $http.post('/generate')
      .success(function(data){
        $scope.codename = data.code;
      })
      .error(function(){
        $scope.codename = 'Error Occurred!'
      });
  }
});