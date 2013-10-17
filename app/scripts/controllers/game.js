'use strict';

var Monster = function() {
	this.speed = 0;
	this.hp = 0;

	this.isAlive = function() {
		return this.hp > 0;
	}
}

var Deck = function() {
	
};

var Character = function(isPlayer) {
	this.active = null;
	this.bench = [];
	this.isPlayer = isPlayer;
	this.move = 'attack';


	this.setMonster = function(monster) {
		if (monster == this.active)
			return;

		var index = this.bench.indexOf(monster);
		if (index != -1) {
			this.bench.splice(index, 1);
			if (this.active != null)
				this.bench.unshift(this.active);
			this.active = monster;
		} else {
			throw 'Cannot promote monster not on the bench';
		}
	};

	this.hasMonster = function(monster) {
		return monster == active || getIndex(monster) != -1;
	};
};

var Fight = function(player, npc) {
	this.player = player;
	this.npc = npc;

	this.move = function(player_move, npc_move) {
		var is_player_attack = player_move instanceof Attack;
		var is_npc_attack = npc_move instanceof Attack;

		if (is_player_attack == is_npc_attack) {
			this.moveFastestFirst(player_move, npc_move);
		} else if (is_npc_attack) {
			this.movePlayerFirst(player_move, npc_move);
		} else {
			this.moveNpcFirst(player_move, npc_move);
		}
	};

	this.moveFastestFirst = function(player_move, npc_move) {
		if (this.isPlayerFastest()) {
			this.movePlayerFirst(player_move, npc_move);
		} else {
			this.moveNpcFirst(npc_move, player_move);
		}
	};

	this.isPlayerFastest = function() {
		var player = this.player;
		var npc = this.npc;
		return player.active.speed > npc.active.speed;
	}

	this.movePlayerFirst = function(player_move, npc_move) {
		this.movePlayerIfAlive(player_move, npc_move);
		this.moveNpcIfAlive(npc_move, player_move);
	};

	this.moveNpcFirst = function (player_move, npc_move) {
			this.moveNpcIfAlive(npc_move, player_move);
			this.movePlayerIfAlive(player_move, npc_move);	
	};

	this.movePlayerIfAlive = function(move, counter) {
		this.moveIfAlive(move, this.player, this.npc, counter);
	};

	this.moveNpcIfAlive = function(move, counter) {
		this.moveIfAlive(move, this.npc, this.player, counter);
	};

	this.moveIfAlive = function(move, agent, target, counter) {
		if (agent.active.isAlive())
			move.do(agent, target, counter);
	};
};

var Attack = function(damage) {
	this.damage = damage;

	this.do = function(agent, target, counter) {
		target.active.hp -= this.damage;
		if (target.active.hp < 0)
			target.active.hp = 0;
	};

};

var Block = function(damage) {
	this.damage = damage;

	this.do = function(agent, target, counter) {
		if (counter instanceof Attack) {
			counter.damage -= damage;
			if (counter.damage < 0) {
				counter.damage = 0;
			}
		}
	};
};

var Swap = function(replacement) {
	this.replacement = replacement;

	this.do = function(agent, target, counter) {
		agent.setMonster(this.replacement);
	};

};

function gameController($scope, $cookies) {
	$scope.player = new Character(true);
	$scope.npc = new Character(false);
	$scope.fight = new Fight($scope.player, $scope.npc);
};

angular.module('theokemonApp')
  .controller('GameCtrl', ['$scope', '$cookies', gameController]);