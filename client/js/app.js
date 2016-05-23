var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
  // configure our routes
  myApp.config(function($routeProvider) {
    $routeProvider
      // route for the home page
      .when('/home', {
        templateUrl : 'static/pages/home.html',
        controller: 'mainController'
      })
      // route for the replays page
      .when('/replays', {
        templateUrl : 'static/pages/replays.html',
        controller: 'replaysController'
      })
      // route for the ladder page
      .when('/ladder', {
        templateUrl : 'static/pages/ladder.html',
        controller: 'ladderController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
  // create the controller and inject Angular's $scope
  myApp.controller('mainController', function($scope) {
    $scope.pageClass = 'pages#home';
  });
  myApp.controller('replaysController', function($scope) {
    $scope.pageClass = 'pages#replays';
  });
  myApp.controller('ladderController', function($scope) {
    $scope.pageClass = 'pages#ladder';
  });
