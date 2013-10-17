'use strict';

describe('Controller: GameCtrl -', function () {

  // load the controller's module
  beforeEach(module('theokemonApp'));

  // Initialize the controller and a mock scope
  var scope, cookies, controller, fight, player, npc;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    cookies = {};
    controller = $controller('GameCtrl', {$scope: scope, $cookies: cookies});
    fight = scope.fight;
    player = scope.player;
    npc = scope.npc;
  }));

  function makeMonster(speed, hp) {
    var m = new Monster();
    m.speed = speed;
    m.hp = hp;
    return m;
  }

  describe('fight', function() {

    it('should apply attacks', function() {
      player.active = makeMonster(5, 10);
      npc.active = makeMonster(3, 10);
      fight.move(new Attack(2), new Attack(6));

      expect(player.active.hp).toEqual(4);
      expect(npc.active.hp).toEqual(8);
    });

    it('should not apply attacks from beaten monsters', function() {
      player.active = makeMonster(5, 10);
      npc.active = makeMonster(3, 10);
      fight.move(new Attack(12), new Attack(1));

      expect(npc.active.hp).toEqual(0);
      expect(player.active.hp).toEqual(10);
    });

    it('should apply blocks', function() {
      player.active = makeMonster(5, 10);
      npc.active = makeMonster(3, 10);
      fight.move(new Attack(5), new Block(2));

      expect(npc.active.hp).toEqual(7);
      expect(player.active.hp).toEqual(10);
    });

    it('should apply swaps before attacks', function() {
      var a = makeMonster(5, 10);
      var b = makeMonster(6, 5);

      player.active = a;
      player.bench = [b];
      npc.active = makeMonster(3, 10);
      fight.move(new Swap(player.bench[0]), new Attack(3));

      expect(a.hp).toEqual(10);
      expect(b.hp).toEqual(2);
    });

  });

});
