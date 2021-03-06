'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProfileCtrl', function ($scope, $rootScope, $stateParams, $state) {
    if (!$stateParams.user) {
      $state.go('login')
    }
    console.log($stateParams)
    $scope.user = $stateParams.user
  });
