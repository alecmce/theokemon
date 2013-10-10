'use strict';

var Monster = function() {
	this.speed = 0;
}

var Character = function(isPlayer) {
	this.monster = new Monster();
	this.isPlayer = isPlayer;
};

var Fight = function(player, npc) {
	this.player = player;
	this.npc = npc;
	this.isTurn = function() {
		var player = this.player;
		var npc = this.npc;
		return player.monster.speed > npc.monster.speed ? player : npc;
	};
} 

function gameController($scope, $cookies) {
	$scope.player = new Character(true);
	$scope.npc = new Character(false);
	$scope.fight = new Fight($scope.player, $scope.npc);
}

angular.module('theokemonApp')
  .controller('GameCtrl', ['$scope', '$cookies', gameController]);