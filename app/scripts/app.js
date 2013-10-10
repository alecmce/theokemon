'use strict';

angular.module('theokemonApp', ['ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/game/myturn', {
        templateUrl: 'views/game/myturn.html',
        controller: 'GameMyturnCtrl'
      })
      .when('/game/theirturn', {
        templateUrl: 'views/game/theirturn.html',
        controller: 'GameTheirturnCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
