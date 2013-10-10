'use strict';

describe('Controller: GameTheirturnCtrl', function () {

  // load the controller's module
  beforeEach(module('theokemonApp', ['ngCookies']));

  var GameTheirturnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameTheirturnCtrl = $controller('GameTheirturnCtrl', {
      $scope: scope
    });
  }));
});
