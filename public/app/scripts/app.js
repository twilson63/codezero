var app = angular.module('public', [])
  .config(function($routeProvider){
    $routeProvider
      .when('/', { controller: 'Index', templateUrl: '/app/views/index.html' });
  });
  