'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $state, $rootScope, user) {

    $rootScope.currentUser = {};

    $scope.submit = function() {
      user.create($scope.user.email).then(function(resp) {
        $rootScope.currentUser = resp.data.user
        $state.go('changepassword')
      })
    }

    // angular-formly
    $scope.userFields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    }
    ];
  });
