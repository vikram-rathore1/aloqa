'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    $timeout(function(){
		$rootScope.$broadcast("pageLoaded");
	}, 500);
  }]);
