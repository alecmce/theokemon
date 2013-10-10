'use strict';

describe('Controller: GameMyturnCtrl', function () {

  // load the controller's module
  beforeEach(module('theokemonApp'));

  var GameMyturnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameMyturnCtrl = $controller('GameMyturnCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
