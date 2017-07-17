'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ChangePasswordCtrl', function ($scope, $state, $rootScope, user) {

    $scope.user = $rootScope.currentUser;

    $scope.submit = function() {
      user.changepassword($scope.user).then(function(resp) {
        console.log(resp)
        $state.go('login')
      })
    }

    // angular-formly
    $scope.userFields = [
    {
      key: 'temppassword',
      type: 'input',
      templateOptions: {
        label: 'Temp password'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Set new password'
      }
    }
    ];
  });
