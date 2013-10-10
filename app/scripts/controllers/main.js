'use strict';

function mainController($scope, $cookies) {
	console.log('MainCtrl ', $scope, $cookies);
	
  	$scope.isContinueDisplayed = function() {
  		return $cookies['savedGames'] == null;
  	};

  	// var isSavedGame = $cookies['savedGames'] && $cookies['savedGames'].length > 0;
  	// $scope.continueDisplay = isSavedGame ? 'block' : 'none';
}

angular.module('theokemonApp')
  .controller('MainCtrl', ['$scope', '$cookies', mainController]);