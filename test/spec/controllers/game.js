'use strict';

describe('Controller: GameCtrl -', function () {

  // load the controller's module
  beforeEach(module('theokemonApp'));

  // Initialize the controller and a mock scope
  var controller, scope, cookies;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    cookies = {};
    controller = $controller('GameCtrl', {$scope: scope, $cookies: cookies});
  }));

  describe('player', function() {

    it('should be defined', function () {
      expect(scope.player).toBeDefined();
    });

    it('should have a monster', function() {
      expect(scope.player.monster).toBeDefined();
    });
  });

  describe('npc', function() {

    it('should be defined', function() {
      expect(scope.npc).toBeDefined();
    });

    it('should have a monster', function() {
      expect(scope.npc.monster).toBeDefined();
    });
  });

  it('should be players turn if player has fastest monster', function() {
    scope.player.monster.speed = 5;
    scope.npc.monster.speed = 3;
    expect(scope.fight.isTurn()).toEqual(scope.player);
  });

  it('should be players turn if npc has fastest monster', function() {
    scope.player.monster.speed = 3;
    scope.npc.monster.speed = 5;
    expect(scope.fight.isTurn()).toEqual(scope.npc);
  });
});
